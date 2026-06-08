import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
const scene=new THREE.Scene();scene.background=new THREE.Color(0x101014);
const camera=new THREE.PerspectiveCamera(75,innerWidth/innerHeight,.1,1000);camera.position.set(0,1.7,0);
const renderer=new THREE.WebGLRenderer({antialias:true});renderer.setSize(innerWidth,innerHeight);document.body.appendChild(renderer.domElement);
const controls=new PointerLockControls(camera,document.body);const overlay=document.getElementById('overlay');overlay.querySelector('div').onclick=e=>{if(e.target.tagName!=='A')controls.lock()};controls.addEventListener('lock',()=>overlay.style.display='none');controls.addEventListener('unlock',()=>overlay.style.display='flex');
const panel=document.getElementById('panel'),panelContent=document.getElementById('panelContent'),reticle=document.getElementById('reticle');function closePanel(){panel.style.display='none';panelContent.innerHTML='';overlay.style.display='flex'}document.getElementById('closePanel').onclick=closePanel;
const keys={},artMeshes=[],teleportMeshes=[],bounds=[];let activeTeleport=null,teleportCooldown=0;document.addEventListener('keydown',e=>{keys[e.code]=true;if(e.code==='KeyE'){e.preventDefault();if(!activateLookTarget())activateTeleport()}});document.addEventListener('keyup',e=>keys[e.code]=false);
const loader=new THREE.TextureLoader();
async function getJSON(path,fallback){const params=new URLSearchParams(location.search);const draft=params.get('draft')!=='0';const key=path.includes('layout')?'gallery-layout-draft':path.includes('data')?'gallery-data-draft':'';if(draft&&key){try{const d=localStorage.getItem(key);if(d){console.info('Using local draft for '+path);return JSON.parse(d)}}catch(e){console.warn(e)}}try{const r=await fetch(path,{cache:'no-cache'});if(!r.ok)throw Error(path);return await r.json()}catch(e){showError(`Could not load ${path}. Using fallback data.`);return fallback}}
function showError(msg){const d=document.createElement('div');d.className='error';d.textContent=msg;document.body.appendChild(d);setTimeout(()=>d.remove(),9000)}
function mat(color,texture){const m=new THREE.MeshStandardMaterial({color:new THREE.Color(color||'#2a2a33'),side:THREE.DoubleSide});if(texture){loader.load(texture,t=>{t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(4,2);m.map=t;m.needsUpdate=true})}return m}
function addPlane(w,h,pos,rot,material){const mesh=new THREE.Mesh(new THREE.PlaneGeometry(w,h),material);mesh.position.set(pos.x,pos.y,pos.z);mesh.rotation.set(rot.x||0,rot.y||0,rot.z||0);scene.add(mesh);return mesh}
function addBound(x,z,w,d,margin=0){bounds.push({minX:x-w/2+margin,maxX:x+w/2-margin,minZ:z-d/2+margin,maxZ:z+d/2-margin})}
function wallPosition(room,wall,x,y,offset=.07){const hw=room.width/2,hd=room.depth/2;if(wall==='front')return {pos:{x:room.x+x,y,z:room.z+hd-offset},rot:{y:Math.PI}};if(wall==='back')return {pos:{x:room.x+x,y,z:room.z-hd+offset},rot:{y:0}};if(wall==='left')return {pos:{x:room.x-hw+offset,y,z:room.z+x},rot:{y:Math.PI/2}};return {pos:{x:room.x+hw-offset,y,z:room.z+x},rot:{y:-Math.PI/2}}}
function normalizeSlot(slot){if(slot==='centre')return 'center';return slot||'center'}
function normalizeWall(w){return ['front','back','left','right'].includes(w)?w:'front'}
function portalOffset(room,wall,slot){slot=normalizeSlot(slot);const long=wall==='front'||wall==='back';const span=long?room.width:room.depth;if(slot==='left'||slot==='back')return -span*.25;if(slot==='right'||slot==='front')return span*.25;return 0}
function portalWorld(room,wall,slot){wall=normalizeWall(wall);slot=normalizeSlot(slot);const off=portalOffset(room,wall,slot);const hw=room.width/2,hd=room.depth/2;if(wall==='front')return {x:room.x+off,z:room.z+hd,axis:'x',offset:off,wall};if(wall==='back')return {x:room.x+off,z:room.z-hd,axis:'x',offset:off,wall};if(wall==='left')return {x:room.x-hw,z:room.z+off,axis:'z',offset:off,wall};return {x:room.x+hw,z:room.z+off,axis:'z',offset:off,wall}}
function getPortalVolume(room,wall,slot,width=4,height=4,depth=.36){
  wall=normalizeWall(wall);slot=normalizeSlot(slot);
  const p=portalWorld(room,wall,slot),n=wallOutwardVector(wall);
  const w=Number(width||4),h=Number(height||4),d=Number(depth||.36),seam=.08;
  const half=w/2,clearHalf=half+seam;
  const xMin=(p.axis==='x')?p.x-clearHalf:Math.min(p.x,p.x+n.x*d)-seam;
  const xMax=(p.axis==='x')?p.x+clearHalf:Math.max(p.x,p.x+n.x*d)+seam;
  const zMin=(p.axis==='z')?p.z-clearHalf:Math.min(p.z,p.z+n.z*d)-seam;
  const zMax=(p.axis==='z')?p.z+clearHalf:Math.max(p.z,p.z+n.z*d)+seam;
  return {...p,normal:n,width:w,height:h,depth:d,clearWidth:w+seam*2,half,clearHalf,xMin,xMax,zMin,zMax,wallPoint:{x:p.x,z:p.z},outerPoint:{x:p.x+n.x*d,z:p.z+n.z*d}};
}
function openingsByRoom(layout){const map={};(layout.rooms||[]).forEach(r=>map[r.id]={front:[],back:[],left:[],right:[]});(layout.hallways||[]).forEach(h=>{const a=layout.rooms.find(r=>r.id===h.from),b=layout.rooms.find(r=>r.id===h.to);if(!a||!b)return;const aw=normalizeWall(h.fromWall||'right'),bw=normalizeWall(h.toWall||'left');const av=getPortalVolume(a,aw,h.fromSlot,Number(h.width||4),Number(h.height||4));const bv=getPortalVolume(b,bw,h.toSlot,Number(h.width||4),Number(h.height||4));map[a.id]?.[aw]?.push({offset:av.offset,width:av.clearWidth,height:av.height,portal:av});map[b.id]?.[bw]?.push({offset:bv.offset,width:bv.clearWidth,height:bv.height,portal:bv});});return map}
function addWallSegment(room,wall,center,width,yCenter,height,material){if(width<=.05||height<=.05)return;const p=wallPosition(room,wall,center,yCenter,.02);addPlane(width,height,p.pos,p.rot,material)}
function makeWallWithOpenings(room,wall,openings,material){const span=(wall==='front'||wall==='back')?room.width:room.depth;const fullH=room.height;const sorted=(openings||[]).map(o=>({offset:Number(o.offset||0),width:Number(o.width||4),height:Number(o.height||4)})).sort((a,b)=>a.offset-b.offset);let cursor=-span/2;for(const o of sorted){const start=Math.max(-span/2,o.offset-o.width/2),end=Math.min(span/2,o.offset+o.width/2);addWallSegment(room,wall,(cursor+start)/2,start-cursor,fullH/2,fullH,material);addWallSegment(room,wall,(start+end)/2,end-start,(o.height+(fullH-o.height)/2),fullH-o.height,material);cursor=end}addWallSegment(room,wall,(cursor+span/2)/2,span/2-cursor,fullH/2,fullH,material)}
function makeLabel(room){if(!room.label)return;const label=room.label||{};const main=label.text||room.title||'';const sub=label.subtitle||label.subheading||'';if(!main&&!sub)return;const c=document.createElement('canvas');c.width=1600;c.height=420;const ctx=c.getContext('2d');ctx.clearRect(0,0,c.width,c.height);ctx.textAlign='center';ctx.textBaseline='middle';const font=String(label.font||'Noto Sans').replace(/[^a-zA-Z0-9 ,_-]/g,'');const size=Number(label.size||label.fontSize||92);const col=label.color||'#ffffff';ctx.shadowColor='rgba(0,0,0,.72)';ctx.shadowBlur=12;ctx.shadowOffsetY=5;ctx.fillStyle=col;ctx.font=`800 ${size}px ${font}, Roboto, Arial, sans-serif`;ctx.fillText(main,c.width/2,sub?c.height*.42:c.height*.5);if(sub){ctx.font=`400 ${Math.round(size*.42)}px ${font}, Roboto, Arial, sans-serif`;ctx.fillStyle=label.subtitleColor||col;ctx.fillText(sub,c.width/2,c.height*.64)}const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;const aspect=c.width/c.height;const w=Number(label.width||6.6),h=w/aspect;const p=wallPosition(room,label.wall||'front',Number(label.x||0),Number(label.y||4.8),.11);addPlane(w,h,p.pos,p.rot,new THREE.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false,side:THREE.DoubleSide}));}

function validColor(v){return typeof v==='string'&&/^#?[0-9a-f]{6}$/i.test(v.trim())}
function cleanColor(v){if(!validColor(v))return '';v=v.trim();return v.startsWith('#')?v:'#'+v}
function wallColourMap(room){
  // v9.7.2: accept all editor/export naming variants so colours seen in the 2D editor
  // are the same colours used by the 3D renderer.
  const out={...(room.wallColors||{}),...(room.wallColours||{}),...(room.wallcolors||{}),...(room.wallcolours||{})};
  ['front','back','left','right'].forEach(w=>{
    out[w]=out[w]||room[w+'WallColor']||room[w+'WallColour']||room['wallColor_'+w]||room['wallColour_'+w];
  });
  return out;
}
function wallTextureMap(room){return room.wallTextures||room.walltextures||{}}
function roomBaseWallColor(room,layout){return cleanColor(room.wallColor||room.wallColour||room.color||room.colour||layout.settings?.defaultWallColor||layout.settings?.wallColor||layout.settings?.wallColour)||'#2a2a33'}
function wallMaterialFor(room,wall,layout){
  const wc=wallColourMap(room);
  const color=cleanColor(wc?.[wall]||wc?.[wall+'Color']||wc?.[wall+'Colour'])||roomBaseWallColor(room,layout);
  const wt=wallTextureMap(room);
  const texture=wt?.[wall]||room.wallTexture||room.texture||'';
  return mat(color,texture)
}
function makeRoom(room,layout,openings){const floorM=mat(layout.settings?.floorColor||'#151515',layout.settings?.floorTexture||'');const ceilM=mat(layout.settings?.ceilingColor||'#1c1c1c',layout.settings?.ceilingTexture||'');makeWallWithOpenings(room,'front',openings?.front,wallMaterialFor(room,'front',layout));makeWallWithOpenings(room,'back',openings?.back,wallMaterialFor(room,'back',layout));makeWallWithOpenings(room,'left',openings?.left,wallMaterialFor(room,'left',layout));makeWallWithOpenings(room,'right',openings?.right,wallMaterialFor(room,'right',layout));addPlane(room.width,room.depth,{x:room.x,y:0,z:room.z},{x:-Math.PI/2},floorM);addPlane(room.width,room.depth,{x:room.x,y:room.height,z:room.z},{x:Math.PI/2},ceilM);addBound(room.x,room.z,room.width,room.depth,0);makeLabel(room)}
function rectFromSegment(a,b,width){
  const dx=b.x-a.x,dz=b.z-a.z;
  const join=.06; // small overlap so adjoining/elbow segments union cleanly after room dragging
  if(Math.abs(dx)>=Math.abs(dz)){
    const len=Math.max(Math.abs(dx),.05)+join*2, cx=(a.x+b.x)/2, cz=a.z;
    return {x:cx,z:cz,w:len,d:width,dir:'x',a,b};
  }
  const len=Math.max(Math.abs(dz),.05)+join*2, cx=a.x, cz=(a.z+b.z)/2;
  return {x:cx,z:cz,w:width,d:len,dir:'z',a,b};
}
function wallOutwardVector(w){w=normalizeWall(w);if(w==='front')return{x:0,z:1};if(w==='back')return{x:0,z:-1};if(w==='left')return{x:-1,z:0};return{x:1,z:0}}
function addv(p,n,d){return{x:p.x+n.x*d,z:p.z+n.z*d}}
function routeHallSegments(p1,p2,fw,tw,width){
  // v9.8.2: hallways are strictly straight conduits. No auto L-shaped routes,
  // elbows, or intermediate nodes are generated.
  return [[p1,p2]];
}
function addHallCellFloorCeil(cell,height,layout){
  const floorM=mat(layout.settings?.floorColor||'#151515',layout.settings?.floorTexture||''),ceilM=mat(layout.settings?.ceilingColor||'#1c1c1c',layout.settings?.ceilingTexture||'');
  const w=cell.x2-cell.x1,d=cell.z2-cell.z1,x=(cell.x1+cell.x2)/2,z=(cell.z1+cell.z2)/2;
  addPlane(w,d,{x,y:0,z},{x:-Math.PI/2},floorM);
  addPlane(w,d,{x,y:height,z},{x:Math.PI/2},ceilM);
  addBound(x,z,w,d,.02);
}
function rangesOverlap(a1,a2,b1,b2){return Math.max(a1,b1)<Math.min(a2,b2)-.03}
function rectContainsCell(r,x1,x2,z1,z2){
  const x=(x1+x2)/2,z=(z1+z2)/2;
  return x>=r.x-r.w/2-.001 && x<=r.x+r.w/2+.001 && z>=r.z-r.d/2-.001 && z<=r.z+r.d/2+.001;
}
function snapCoord(v){return Math.round(Number(v)*1000)/1000}
function makeUnionCells(rects){
  // v9.7.2: snap grid coordinates. Tiny floating-point differences after dragging
  // rooms were creating phantom one-cell boundaries that appeared as vertical walls.
  const xs=[...new Set(rects.flatMap(r=>[snapCoord(r.x-r.w/2),snapCoord(r.x+r.w/2)]))].sort((a,b)=>a-b);
  const zs=[...new Set(rects.flatMap(r=>[snapCoord(r.z-r.d/2),snapCoord(r.z+r.d/2)]))].sort((a,b)=>a-b);
  const cells=[], occ=[];
  for(let ix=0;ix<xs.length-1;ix++){
    occ[ix]=[];
    for(let iz=0;iz<zs.length-1;iz++){
      const inside=rects.some(r=>rectContainsCell(r,xs[ix],xs[ix+1],zs[iz],zs[iz+1]));
      occ[ix][iz]=inside;
      if(inside) cells.push({ix,iz,x1:xs[ix],x2:xs[ix+1],z1:zs[iz],z2:zs[iz+1]});
    }
  }
  return {xs,zs,cells,occ};
}
function edgeIsPortalEnd(edge,portals){
  // Suppress the open doorway cap using exact portal volumes rather than hallway-width guesses.
  const eps=.08;
  for(const p of portals){
    if(p.wall==='front' && edge.side==='bottom' && Math.abs(edge.z-p.z)<eps && rangesOverlap(edge.x1,edge.x2,p.x-p.clearHalf,p.x+p.clearHalf)) return true;
    if(p.wall==='back' && edge.side==='top' && Math.abs(edge.z-p.z)<eps && rangesOverlap(edge.x1,edge.x2,p.x-p.clearHalf,p.x+p.clearHalf)) return true;
    if(p.wall==='left' && edge.side==='right' && Math.abs(edge.x-p.x)<eps && rangesOverlap(edge.z1,edge.z2,p.z-p.clearHalf,p.z+p.clearHalf)) return true;
    if(p.wall==='right' && edge.side==='left' && Math.abs(edge.x-p.x)<eps && rangesOverlap(edge.z1,edge.z2,p.z-p.clearHalf,p.z+p.clearHalf)) return true;
  }
  return false;
}
function edgePortalOverlap(edge,p){
  const pad=.015;
  if(edge.x!==undefined){
    if(edge.x<p.xMin-pad||edge.x>p.xMax+pad)return null;
    const a=Math.max(edge.z1,p.zMin),b=Math.min(edge.z2,p.zMax);
    return b>a+.02?[a,b]:null;
  }
  if(edge.z<p.zMin-pad||edge.z>p.zMax+pad)return null;
  const a=Math.max(edge.x1,p.xMin),b=Math.min(edge.x2,p.xMax);
  return b>a+.02?[a,b]:null;
}
function trimEdgeByPortalVolumes(edge,portals){
  let pieces=[{...edge}];
  for(const p of portals){
    const next=[];
    for(const e of pieces){
      const cut=edgePortalOverlap(e,p);
      if(!cut){next.push(e);continue;}
      if(e.x!==undefined){
        if(cut[0]>e.z1+.02)next.push({...e,z2:cut[0]});
        if(cut[1]<e.z2-.02)next.push({...e,z1:cut[1]});
      }else{
        if(cut[0]>e.x1+.02)next.push({...e,x2:cut[0]});
        if(cut[1]<e.x2-.02)next.push({...e,x1:cut[1]});
      }
    }
    pieces=next;
  }
  return pieces;
}
function addWallForEdge(edge,height,wallM){
  if(edge.side==='left') addPlane(edge.z2-edge.z1,height,{x:edge.x,y:height/2,z:(edge.z1+edge.z2)/2},{y:Math.PI/2},wallM);
  if(edge.side==='right') addPlane(edge.z2-edge.z1,height,{x:edge.x,y:height/2,z:(edge.z1+edge.z2)/2},{y:-Math.PI/2},wallM);
  if(edge.side==='bottom') addPlane(edge.x2-edge.x1,height,{x:(edge.x1+edge.x2)/2,y:height/2,z:edge.z},{y:0},wallM);
  if(edge.side==='top') addPlane(edge.x2-edge.x1,height,{x:(edge.x1+edge.x2)/2,y:height/2,z:edge.z},{y:Math.PI},wallM);
}
function mergeEdges(edges){
  const out=[];
  const groups={};
  for(const e of edges){
    const key=e.side+(e.x!==undefined?':x:'+e.x.toFixed(4):':z:'+e.z.toFixed(4));
    (groups[key] ||= []).push({...e});
  }
  for(const key in groups){
    const arr=groups[key];
    const vertical=arr[0].x!==undefined;
    arr.sort((a,b)=>vertical?a.z1-b.z1:a.x1-b.x1);
    let cur=arr[0];
    for(let i=1;i<arr.length;i++){
      const e=arr[i];
      if(vertical && Math.abs(e.z1-cur.z2)<.001){cur.z2=e.z2;continue;}
      if(!vertical && Math.abs(e.x1-cur.x2)<.001){cur.x2=e.x2;continue;}
      out.push(cur);cur=e;
    }
    out.push(cur);
  }
  return out;
}

function hallwayCenterline(h,rooms){
  const a=rooms.find(r=>r.id===h.from),b=rooms.find(r=>r.id===h.to);if(!a||!b)return null;
  const width=Number(h.width||4),height=Number(h.height||4);
  const fw=normalizeWall(h.fromWall||'right'),tw=normalizeWall(h.toWall||'left');
  const p1=getPortalVolume(a,fw,h.fromSlot||'center',width,height,.18);
  const p2=getPortalVolume(b,tw,h.toSlot||'center',width,height,.18);
  const start={x:p1.x+p1.normal.x*.01,z:p1.z+p1.normal.z*.01};
  const end={x:p2.x+p2.normal.x*.01,z:p2.z+p2.normal.z*.01};
  return {a,b,p1,p2,start,end,width,height,fw,tw};
}
function hallwayRoute(h,rooms){
  const c=hallwayCenterline(h,rooms);if(!c)return null;
  // v9.7: hallways are treated as first-class rectangular conduit spaces.
  // The stored hallway connects two explicit portal nodes. Rendering uses the
  // portal centreline as the single source of truth, then creates a clean
  // rectangular prism (or a simple orthogonal L/T conduit when portals are not aligned).
  const segs=routeHallSegments(c.start,c.end,c.fw,c.tw,c.width).filter(([u,v])=>Math.hypot(u.x-v.x,u.z-v.z)>.05);
  return {...c,segs};
}
function addHallPrismSegment(seg,width,height,layout,wallM){
  const [a,b]=seg;const dx=b.x-a.x,dz=b.z-a.z;
  const horizontal=Math.abs(dx)>=Math.abs(dz);
  const cx=(a.x+b.x)/2,cz=(a.z+b.z)/2;
  if(horizontal){
    const len=Math.abs(dx);if(len<=.04)return;
    addPlane(len,width,{x:cx,y:.012,z:cz},{x:-Math.PI/2},mat(layout.settings?.floorColor||'#151515',''));
    addPlane(len,width,{x:cx,y:height,z:cz},{x:Math.PI/2},mat(layout.settings?.ceilingColor||'#1c1c1c',''));
    addPlane(len,height,{x:cx,y:height/2,z:cz-width/2},{y:0},wallM);
    addPlane(len,height,{x:cx,y:height/2,z:cz+width/2},{y:Math.PI},wallM);
    addBound(cx,cz,len,width,.02);
  }else{
    const len=Math.abs(dz);if(len<=.04)return;
    addPlane(width,len,{x:cx,y:.012,z:cz},{x:-Math.PI/2},mat(layout.settings?.floorColor||'#151515',''));
    addPlane(width,len,{x:cx,y:height,z:cz},{x:Math.PI/2},mat(layout.settings?.ceilingColor||'#1c1c1c',''));
    addPlane(len,height,{x:cx-width/2,y:height/2,z:cz},{y:Math.PI/2},wallM);
    addPlane(len,height,{x:cx+width/2,y:height/2,z:cz},{y:-Math.PI/2},wallM);
    addBound(cx,cz,width,len,.02);
  }
}
function makeHall(h,rooms,layout){
  const route=hallwayRoute(h,rooms);if(!route)return;
  const color=cleanColor(h.wallColor||h.wallColour||h.color||h.colour||layout.settings?.hallwayColor||layout.settings?.hallwayColour)||'#22222a';
  const wallM=mat(color,'');
  // Build floor/ceiling as a union so elbow joins do not leave triangular or black gaps.
  const rects=route.segs.map(([u,v])=>rectFromSegment(u,v,route.width)).filter(r=>r.w>.04&&r.d>.04);
  if(!rects.length)return;
  const union=makeUnionCells(rects);
  union.cells.forEach(c=>addHallCellFloorCeil(c,route.height,layout));
  // Render only the external conduit perimeter. Portal-facing caps are omitted,
  // because the connected room wall already owns the doorway frame.
  const portals=[route.p1,route.p2];
  const edges=[];const {xs,zs,occ}=union;
  for(let ix=0;ix<xs.length-1;ix++)for(let iz=0;iz<zs.length-1;iz++){
    if(!occ[ix][iz])continue;
    if(!occ[ix-1]?.[iz])edges.push({side:'left',x:xs[ix],z1:zs[iz],z2:zs[iz+1]});
    if(!occ[ix+1]?.[iz])edges.push({side:'right',x:xs[ix+1],z1:zs[iz],z2:zs[iz+1]});
    if(!occ[ix]?.[iz-1])edges.push({side:'bottom',z:zs[iz],x1:xs[ix],x2:xs[ix+1]});
    if(!occ[ix]?.[iz+1])edges.push({side:'top',z:zs[iz+1],x1:xs[ix],x2:xs[ix+1]});
  }
  const trimmed=[];
  mergeEdges(edges).forEach(e=>{
    // Drop only the actual end cap, not the side walls that form the hallway.
    if(edgeIsPortalEnd(e,portals))return;
    trimmed.push(...trimEdgeByPortalVolumes(e,portals));
  });
  mergeEdges(trimmed).forEach(e=>addWallForEdge(e,route.height,wallM));
}

function collectHallwayNetwork(hallways,rooms){
  const routes=[];
  (hallways||[]).forEach(h=>{
    const route=hallwayRoute(h,rooms);
    if(!route||!route.segs?.length)return;
    route.hallway=h;
    routes.push(route);
  });
  return routes;
}

function hallColor(h,layout){
  return cleanColor(h?.wallColor||h?.wallColour||h?.color||h?.colour)||cleanColor(layout.settings?.hallwayColor||layout.settings?.hallwayColour)||'#22222a';
}
function rectForRouteSegment(route,u,v){
  const r=rectFromSegment(u,v,route.width);
  r.hallway=route.hallway;
  r.color=hallColor(route.hallway, window.__galleryLayoutForMaterials||{});
  return r;
}
function edgeMid(edge){return edge.x!==undefined?{x:edge.x,z:(edge.z1+edge.z2)/2}:{x:(edge.x1+edge.x2)/2,z:edge.z}}
function distPointToRectEdge(pt,r){
  const x1=r.x-r.w/2,x2=r.x+r.w/2,z1=r.z-r.d/2,z2=r.z+r.d/2;
  const dx=Math.max(x1-pt.x,0,pt.x-x2), dz=Math.max(z1-pt.z,0,pt.z-z2);
  return Math.hypot(dx,dz);
}
function colorForNetworkEdge(edge,routeRects,layout){
  const pt=edgeMid(edge);let best=null,bd=Infinity;
  for(const r of routeRects){const d=distPointToRectEdge(pt,r);if(d<bd){bd=d;best=r;}}
  return hallColor(best?.hallway,layout);
}


function makeStraightHall(route,layout){
  const h=route.hallway||{};
  const seg=route.segs?.[0]; if(!seg)return;
  const [a,b]=seg; const dx=b.x-a.x,dz=b.z-a.z,len=Math.hypot(dx,dz); if(len<=.05)return;
  const width=Number(route.width||4),height=Number(route.height||4);
  const cx=(a.x+b.x)/2,cz=(a.z+b.z)/2,ang=Math.atan2(dz,dx);
  const color=hallColor(h,layout), wallM=mat(color,'');
  const floorM=mat(layout.settings?.floorColor||'#151515',layout.settings?.floorTexture||''), ceilM=mat(layout.settings?.ceilingColor||'#1c1c1c',layout.settings?.ceilingTexture||'');
  addPlane(len,width,{x:cx,y:.012,z:cz},{x:-Math.PI/2,y:-ang},floorM);
  addPlane(len,width,{x:cx,y:height,z:cz},{x:Math.PI/2,y:ang},ceilM);
  const nx=-Math.sin(ang), nz=Math.cos(ang);
  addPlane(len,height,{x:cx+nx*width/2,y:height/2,z:cz+nz*width/2},{y:-ang+Math.PI},wallM);
  addPlane(len,height,{x:cx-nx*width/2,y:height/2,z:cz-nz*width/2},{y:-ang},wallM);
  addBound(cx,cz,Math.abs(dx)+width,Math.abs(dz)+width,.02);
}

function makeHallNetwork(hallways,rooms,layout){
  const routes=collectHallwayNetwork(hallways,rooms);
  if(!routes.length)return;
  // v9.8.2: render each hallway as one straight hollow rectangular conduit.
  window.__galleryLayoutForMaterials=layout;
  routes.forEach(route=>makeStraightHall(route,layout));
}

function makePartitionWall(p){
  const x1=Number(p.x1||0),z1=Number(p.z1||0),x2=Number(p.x2||0),z2=Number(p.z2||0);
  const dx=x2-x1,dz=z2-z1,len=Math.hypot(dx,dz); if(len<.05)return;
  const h=Number(p.height||6),th=Number(p.thickness||.22);
  const m=mat(cleanColor(p.wallColor||p.color||p.colour)||'#f5f0e8',p.wallTexture||p.texture||'');
  const core=new THREE.Mesh(new THREE.BoxGeometry(len,h,th),m);
  core.position.set((x1+x2)/2,h/2,(z1+z2)/2);
  core.rotation.y=-Math.atan2(dz,dx);
  core.castShadow=core.receiveShadow=true;
  scene.add(core);
  addBound((x1+x2)/2,(z1+z2)/2,len,th,0);
}
function addArtworkAccentLight(artData,room,p){
  if(window.__galleryLayoutForMaterials?.settings?.autoArtworkLights===false)return;
  const intensity=Number(window.__galleryLayoutForMaterials?.settings?.artworkLightIntensity??.9);
  if(intensity<=0)return;
  const light=new THREE.PointLight(0xffffff,intensity,5.5);
  light.position.copy(p.pos);
  light.position.y+=Number(artData.height||1.7)/2+.45;
  light.position.x+=Math.sin(p.rot.y||0)*.35;
  light.position.z+=Math.cos(p.rot.y||0)*.35;
  scene.add(light);
}
function createArt(data,rooms,i,openings={}){const room=rooms.find(r=>r.id===(data.room||rooms[0]?.id));if(!room)return;if(artOverlapsDoorway(data,room,openings)){console.warn('Artwork skipped because it overlaps a doorway opening:',data.title||data.id);return;}const type=String(data.mediaType||data.type||'artwork').toLowerCase();const url=data.media||data.image||data.url||'';const tex=makeArtworkTexture(data,type,url);const p=wallPosition(room,data.wall||'back',Number(data.x||0),Number(data.y||3.1));const mesh=addPlane(Number(data.width||3),Number(data.height||1.7),p.pos,p.rot,new THREE.MeshBasicMaterial({map:tex,side:THREE.DoubleSide}));mesh.userData=data;artMeshes.push(mesh);addArtworkAccentLight(data,room,p);makeStatement(data,room,p)}

function teleportCanvas(label){
  const c=document.createElement('canvas');c.width=512;c.height=512;const ctx=c.getContext('2d');
  ctx.clearRect(0,0,512,512);ctx.fillStyle='rgba(64,124,255,.85)';ctx.beginPath();ctx.arc(256,256,210,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='rgba(255,255,255,.95)';ctx.lineWidth=22;ctx.stroke();ctx.fillStyle='white';ctx.font='bold 160px Arial';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('⇄',256,225);
  ctx.font='bold 34px Arial';ctx.fillText(label||'Teleport',256,382);return new THREE.CanvasTexture(c)
}
function destinationForTeleport(layout,t){
  if(t.linkedTo){const o=(layout.settings?.teleports||[]).find(x=>x.id===t.linkedTo);if(o)return {x:Number(o.x||0),z:Number(o.z||0),label:o.label||o.id};}
  return {x:Number(t.toX||0),z:Number(t.toZ||0),label:t.destinationLabel||t.to||'destination'};
}
function addTeleports(layout){
  (layout.settings?.teleports||[]).forEach((t,i)=>{
    const dest=destinationForTeleport(layout,t);
    const tex=teleportCanvas(t.label||('Teleport '+(i+1)));
    const mesh=addPlane(Number(t.size||1.4),Number(t.size||1.4),{x:Number(t.x||0),y:.025,z:Number(t.z||0)},{x:-Math.PI/2},new THREE.MeshBasicMaterial({map:tex,transparent:true,side:THREE.DoubleSide}));
    mesh.userData={...t,type:'teleport',destX:dest.x,destZ:dest.z,destLabel:dest.label,triggerMode:t.triggerMode||t.interaction||'press',interaction:t.interaction||t.triggerMode||'press',radius:Number(t.radius||2.2)};teleportMeshes.push(mesh);
  });
}

function addLights(layout){scene.add(new THREE.AmbientLight(0xffffff,Number(layout.settings?.ambientLight??1.1)));const d=new THREE.DirectionalLight(0xffffff,Number(layout.settings?.directionalLight??1.4));d.position.set(5,10,5);scene.add(d);(layout.settings?.additionalLights||[]).forEach(l=>{const p=new THREE.PointLight(new THREE.Color(l.color||'#fff'),Number(l.intensity||1.5),Number(l.distance||28));p.position.set(Number(l.x||0),Number(l.y||5),Number(l.z||0));scene.add(p)})}
function insideAny(pos){return bounds.some(b=>pos.x>=b.minX&&pos.x<=b.maxX&&pos.z>=b.minZ&&pos.z<=b.maxZ)}
function tryMove(delta){if(!controls.isLocked)return;const old=camera.position.clone();const speed=6*delta;if(keys.KeyW)controls.moveForward(speed);if(keys.KeyS)controls.moveForward(-speed);if(keys.KeyA)controls.moveRight(-speed);if(keys.KeyD)controls.moveRight(speed);camera.position.y=1.7;if(!insideAny(camera.position))camera.position.copy(old)}
const raycaster=new THREE.Raycaster(),mouse=new THREE.Vector2(),teleportHint=document.getElementById('teleportHint');function setMouse(e){mouse.x=e.clientX/innerWidth*2-1;mouse.y=-(e.clientY/innerHeight)*2+1;raycaster.setFromCamera(mouse,camera)}function setCenterRay(){raycaster.setFromCamera({x:0,y:0},camera)}function teleportDistance(tp){const dx=camera.position.x-tp.position.x,dz=camera.position.z-tp.position.z;return Math.hypot(dx,dz)}function findTeleportCandidate(){if(!controls.isLocked)return null;setCenterRay();const aimed=raycaster.intersectObjects(teleportMeshes)[0]?.object;if(aimed)return aimed;let best=null,bestDist=Infinity;for(const tp of teleportMeshes){const d=teleportDistance(tp),r=Number(tp.userData.radius||2.2);if(d<=r&&d<bestDist){best=tp;bestDist=d}}return best}function activateTeleport(tp=activeTeleport){if(!controls.isLocked||!tp||teleportCooldown>0)return;const d=tp.userData;camera.position.set(Number(d.destX??d.toX??0),1.7,Number(d.destZ??d.toZ??0));teleportCooldown=.8;teleportHint.style.display='none'}function teleportMode(tp){return String(tp?.userData?.triggerMode||tp?.userData?.interaction||'press').toLowerCase()}function updateTeleportPrompt(delta){if(teleportCooldown>0)teleportCooldown-=delta;activeTeleport=findTeleportCandidate();if(!activeTeleport){teleportHint.style.display='none';return}const d=activeTeleport.userData,mode=teleportMode(activeTeleport),dist=teleportDistance(activeTeleport),r=Number(d.radius||2.2);if((mode==='proximity'||mode==='walkover'||mode==='auto'||mode==='both')&&dist<=r&&teleportCooldown<=0){activateTeleport(activeTeleport);return}const destination=d.destLabel||d.destinationLabel||'destination';if(mode==='proximity'||mode==='walkover'||mode==='auto'){teleportHint.style.display='block';teleportHint.textContent=(d.label||'Teleport')+' → '+destination+' — walk onto marker to travel';}else if(mode==='both'){teleportHint.style.display='block';teleportHint.textContent=(d.label||'Teleport')+' → '+destination+' — walk onto marker or press E';}else{teleportHint.style.display='block';teleportHint.textContent=(d.label||'Teleport')+' → '+destination+' — press E to travel';}}function openArtworkPanel(d){overlay.style.display='none';controls.unlock();setTimeout(()=>overlay.style.display='none',0);panel.style.display='block';panelContent.innerHTML=`<h2>${escHTML(d.title||'Untitled')}</h2><p><em>${escHTML(d.artist||'')}</em></p>${mediaEmbed(d.media||d.image,d.mediaType||d.type,!!d.autoplay)}${d.statementDisplay!=='none'?`<h3>Artist Statement</h3><p>${escHTML(d.description||'')}</p>`:''}<p class="audioHint">Press E while looking at media/artwork if mouse click is intercepted. Closing this panel stops embedded playback.</p>`}function activateLookTarget(){if(!controls.isLocked)return false;setCenterRay();const hit=raycaster.intersectObjects(artMeshes,true)[0];if(hit){openArtworkPanel(hit.object.userData);return true}return false}renderer.domElement.addEventListener('pointerdown',()=>activateLookTarget());renderer.domElement.addEventListener('click',()=>activateLookTarget());
const audioState={enabled:false,muted:false,master:.75,sources:[]};
function addAudioIcons(layout){
  (layout.settings?.audio?.sources||[]).forEach((a,i)=>{
    const c=document.createElement('canvas');c.width=256;c.height=256;const ctx=c.getContext('2d');
    ctx.fillStyle='rgba(139,92,246,.9)';ctx.beginPath();ctx.arc(128,128,104,0,Math.PI*2);ctx.fill();ctx.strokeStyle='white';ctx.lineWidth=10;ctx.stroke();ctx.fillStyle='white';ctx.font='bold 92px Arial';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(a.kind==='narration'?'🎙':'♪',128,124);
    const tex=new THREE.CanvasTexture(c);addPlane(1.1,1.1,{x:Number(a.x||0),y:.035,z:Number(a.z||0)},{x:-Math.PI/2},new THREE.MeshBasicMaterial({map:tex,transparent:true,side:THREE.DoubleSide}));
  });
}
function setupAudio(layout){
  const cfg=layout.settings?.audio||{};
  audioState.master=Number(cfg.masterVolume??.75);
  const volume=document.getElementById('audioVolume');
  const mute=document.getElementById('audioMute');
  const toggle=document.getElementById('audioToggle');
  const status=document.getElementById('audioStatus');
  volume.value=audioState.master;
  audioState.sources=(cfg.sources||[]).map(a=>{
    const direct=(a.type==='direct'||String(a.url||'').match(/\.(mp3|ogg|wav|m4a)(\?|$)/i))&&!youtubeId(a.url)&&!isSoundCloudUrl(a.url);
    const obj={cfg:a,el:null,direct};
    if(direct&&a.url){
      const el=new Audio(a.url);
      el.loop=a.loop!==false;
      el.preload='auto';
      el.crossOrigin='anonymous';
      el.volume=0;
      obj.el=el;
    }
    return obj;
  });
  function stopAll(){
    audioState.sources.forEach(s=>{if(s.el){s.el.pause();s.el.currentTime=0;s.el.volume=0;}});
  }
  function refreshButton(){
    toggle.textContent=audioState.enabled?'Turn sound off':'Turn sound on';
    status.textContent=audioState.enabled?(audioState.muted?'Muted':'Audio on'):'Audio off';
  }
  toggle.onclick=()=>{
    audioState.enabled=!audioState.enabled;
    if(audioState.enabled){
      audioState.sources.forEach(s=>{if(s.el)s.el.play().catch(()=>{status.textContent='Click again or check audio URL';});});
      updateAudioVolumes();
    }else{
      stopAll();
    }
    refreshButton();
  };
  mute.onchange=e=>{audioState.muted=e.target.checked;updateAudioVolumes();refreshButton();};
  volume.oninput=e=>{audioState.master=Number(e.target.value);updateAudioVolumes();};
  refreshButton();
}
function updateAudioVolumes(){
  const status=document.getElementById('audioStatus');
  if(!audioState.enabled){
    audioState.sources.forEach(s=>{if(s.el)s.el.volume=0;});
    status.textContent='Audio off';
    return;
  }
  let active=0;
  audioState.sources.forEach(s=>{
    if(!s.el)return;
    const a=s.cfg;
    const dx=camera.position.x-Number(a.x||0),dz=camera.position.z-Number(a.z||0);
    const dist=Math.hypot(dx,dz);
    const radius=Number(a.radius||18);
    const falloff=Math.max(0,1-dist/radius);
    s.el.volume=audioState.muted?0:Math.min(1,audioState.master*Number(a.volume??.5)*falloff);
    if(s.el.volume>.01)active++;
  });
  status.textContent=audioState.muted?'Muted':active?'Audio nearby':'Audio on';
}

const fallback={partitions:[],rooms:[{id:'animation',title:'Animation',x:0,z:0,width:20,depth:14,height:6,wallColor:'#2a2a33',label:{text:'Animation',wall:'front',x:0,y:4.8}},{id:'games',title:'Games',x:30,z:0,width:20,depth:14,height:6,wallColor:'#2a2a33',label:{text:'Games',wall:'front',x:0,y:4.8}}],hallways:[{id:'hall1',from:'animation',to:'games',fromWall:'right',fromSlot:'center',toWall:'left',toSlot:'center',width:4,height:4,wallColor:'#22222a'}],settings:{ambientLight:1.1,directionalLight:1.4,floorColor:'#151515',ceilingColor:'#1c1c1c',floorTexture:'',ceilingTexture:'',autoArtworkLights:true,artworkLightIntensity:.9,defaultWallColor:'#2a2a33',palette:['#2a2a33','#f5f0e8','#e8dcc2','#334155','#4338ca','#6b3f2a','#1f2937','#ffffff'],additionalLights:[{x:0,y:5.5,z:0,intensity:1.8,color:'#fff'}],teleports:[{id:'teleport1',label:'Jump to Games',x:0,z:3,toX:30,toZ:0,destinationLabel:'Games',triggerMode:'press',interaction:'press',radius:2.2}]}};
const layout=await getJSON('./gallery-layout.json',fallback);const data=await getJSON('./gallery-data.json',[]);addLights(layout);addTeleports(layout);setupAudio(layout);window.__galleryLayoutForMaterials=layout;const openings=openingsByRoom(layout);(layout.rooms||[]).forEach(r=>makeRoom(r,layout,openings[r.id]));(layout.partitions||layout.halfWalls||[]).forEach(makePartitionWall);makeHallNetwork(layout.hallways||[],layout.rooms||[],layout);camera.position.set(layout.rooms?.[0]?.x||0,1.7,layout.rooms?.[0]?.z||0);data.forEach((d,i)=>createArt(d,layout.rooms||[],i,openings));
const clock=new THREE.Clock();function animate(){requestAnimationFrame(animate);tryMove(clock.getDelta());updateAudioVolumes();renderer.render(scene,camera)}animate();addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight)});
