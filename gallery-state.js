(function(){
  const PROJECTS_KEY='gallery-projects';
  const ACTIVE_KEY='active-gallery-id';
  const LAYOUT_DRAFT_KEY='gallery-layout-draft';
  const DATA_DRAFT_KEY='gallery-data-draft';
  const DEFAULT_SETTINGS={
    floorColor:'#151515',
    ceilingColor:'#1c1c1c',
    floorTexture:'',
    ceilingTexture:'',
    autoArtworkLights:true,
    artworkLightIntensity:.9,
    defaultWallColor:'#2a2a33',
    hallwayColor:'#22222a',
    palette:['#2a2a33','#f5f0e8','#e8dcc2','#334155','#4338ca','#6b3f2a','#1f2937','#ffffff'],
    lightingPreset:'soft-gallery',
    ambientLight:.85,
    directionalLight:.95,
    hemisphereLight:.35,
    additionalLights:[],
    teleports:[],
    audio:{enabled:false,masterVolume:.75,sources:[]},
    tours:[]
  };

  function safeJSON(raw,fallback){
    if(raw==null||raw==='')return fallback;
    try{return JSON.parse(raw)}catch(e){return fallback}
  }
  function clone(value){
    if(value==null)return value;
    try{return structuredClone(value)}catch(e){return JSON.parse(JSON.stringify(value))}
  }
  function num(value,fallback=0){
    const n=Number(value);
    return Number.isFinite(n)?n:fallback;
  }
  function arr(value){return Array.isArray(value)?value:[]}
  function normalizeSlot(slot){return slot==='centre'?'center':(slot||'center')}
  function normalizeWall(w){
    w=String(w||'').toLowerCase();
    const aliases={north:'back',south:'front',east:'right',west:'left'};
    w=aliases[w]||w;
    return ['front','back','left','right'].includes(w)?w:'front';
  }
  function isWorldArtwork(a){return a&&((a.placement==='world')||!!a.worldPosition)}
  function pct(value,fallback=65){
    const n=num(value,NaN);
    if(!Number.isFinite(n))return fallback;
    return Math.max(0,Math.min(200,n<=2?n*100:n));
  }
  function ratio(value,fallback=.65){
    const n=num(value,NaN);
    if(!Number.isFinite(n))return fallback;
    return Math.max(0,Math.min(2,n>2?n/100:n));
  }
  function lightAngleDeg(l={}){
    const deg=num(l.angleDeg,NaN);
    if(Number.isFinite(deg))return Math.max(3,Math.min(120,deg));
    const a=num(l.angle,NaN);
    return Number.isFinite(a)?Math.max(3,Math.min(120,a>Math.PI?a:a*180/Math.PI)):36;
  }
  function normalizeLight(l,i){
    const angleDeg=lightAngleDeg(l),softnessPct=pct(l.softnessPct??l.penumbra,65);
    const decayPct=l.decayPct!==undefined?pct(l.decayPct,60):Math.max(0,Math.min(200,num(l.decay,1.2)/2*100));
    const washWidthPct=l.washWidthPct!==undefined?pct(l.washWidthPct,100):Math.max(10,Math.min(200,num(l.width,6)/6*100));
    const width=num(l.width,Math.max(1,ratio(washWidthPct,1)*6));
    const kind=String(l.kind||l.type||'point').toLowerCase();
    return {
      ...l,id:l.id||'light'+(i+1),x:num(l.x,0),y:num(l.y,5.5),z:num(l.z,0),kind,type:kind,
      intensity:num(l.intensity,1.5),color:l.color||'#ffffff',distance:num(l.distance,18),
      angleDeg,angle:angleDeg*Math.PI/180,softnessPct,penumbra:ratio(softnessPct,.65),
      decayPct,decay:Math.max(.05,ratio(decayPct,.6)*2),washWidthPct,width,height:num(l.height,Math.max(.6,width*.58))
    };
  }

  function normalizeRoom(room,i,settings){
    const r={...room};
    const wc={...(r.wallColors||{}),...(r.wallColours||{}),...(r.wallcolors||{}),...(r.wallcolours||{})};
    ['front','back','left','right'].forEach(w=>{
      wc[w]=wc[w]||r[w+'WallColor']||r[w+'WallColour']||r['wallColor_'+w]||r['wallColour_'+w]||'';
    });
    const wt={...(r.wallTextures||{}),...(r.walltextures||{})};
    ['front','back','left','right'].forEach(w=>{
      wt[w]=wt[w]||r[w+'WallTexture']||r['wallTexture_'+w]||'';
    });
    return {
      ...r,
      id:r.id||'room'+(i+1),
      title:r.title||r.name||r.id||'Room '+(i+1),
      x:num(r.x,0),
      z:num(r.z,0),
      width:num(r.width,20),
      depth:num(r.depth,14),
      height:num(r.height,6),
      wallColor:r.wallColor||r.wallColour||settings.defaultWallColor,
      wallColors:wc,
      wallTexture:r.wallTexture||r.texture||'',
      wallTextures:wt,
      label:r.label||{text:r.title||r.name||r.id||'Room '+(i+1),wall:'front',x:0,y:4.8}
    };
  }

  function normalizePartition(p,i,settings){
    return {
      ...p,
      id:p.id||'wall'+(i+1),
      title:p.title||p.label||'Half Wall '+(i+1),
      x1:num(p.x1??p.startX,-5),
      z1:num(p.z1??p.startZ,0),
      x2:num(p.x2??p.endX,5),
      z2:num(p.z2??p.endZ,0),
      height:num(p.height,6),
      thickness:num(p.thickness,.22),
      wallColor:p.wallColor||p.wallColour||p.color||p.colour||settings.defaultWallColor||'#f5f0e8',
      wallTexture:p.wallTexture||p.texture||''
    };
  }

  function normalizeHallway(h,i,settings){
    return {
      ...h,
      id:h.id||'hall'+(i+1),
      from:h.from,
      to:h.to,
      fromWall:normalizeWall(h.fromWall||'right'),
      fromSlot:normalizeSlot(h.fromSlot),
      toWall:normalizeWall(h.toWall||'left'),
      toSlot:normalizeSlot(h.toSlot),
      width:num(h.width,4),
      height:num(h.height,4),
      wallColor:h.wallColor||h.wallColour||h.color||h.colour||settings.hallwayColor||'#22222a',
      wallTexture:h.wallTexture||h.texture||''
    };
  }

  function normalizeLayout(layout){
    const j=clone(layout)||{};
    const settings={...DEFAULT_SETTINGS,...(j.settings||{})};
    settings.floorTexture=settings.floorTexture||'';
    settings.ceilingTexture=settings.ceilingTexture||'';
    settings.autoArtworkLights=settings.autoArtworkLights!==false;
    settings.artworkLightIntensity=num(settings.artworkLightIntensity,.9);
    settings.palette=arr(settings.palette).length?settings.palette:DEFAULT_SETTINGS.palette.slice();
    settings.lightingPreset=settings.lightingPreset||DEFAULT_SETTINGS.lightingPreset;
    settings.hemisphereLight=num(settings.hemisphereLight,DEFAULT_SETTINGS.hemisphereLight);
    settings.additionalLights=arr(settings.additionalLights).map(normalizeLight);
    settings.teleports=arr(settings.teleports).map((t,i)=>({
      ...t,id:t.id||'teleport'+(i+1),label:t.label||'Teleport '+(i+1),x:num(t.x,0),z:num(t.z,0),
      size:num(t.size,1.4),linkedTo:t.linkedTo||'',toX:t.toX??0,toZ:t.toZ??0,
      destinationLabel:t.destinationLabel||'',triggerMode:t.triggerMode||t.interaction||'press',
      interaction:t.interaction||t.triggerMode||'press',radius:num(t.radius,2.2)
    }));
    settings.audio={...DEFAULT_SETTINGS.audio,...(settings.audio||{})};
    settings.audio.masterVolume=num(settings.audio.masterVolume,.75);
    settings.audio.sources=arr(settings.audio.sources).map((a,i)=>({
      ...a,id:a.id||'audio'+(i+1),label:a.label||'Audio '+(i+1),kind:a.kind||'ambient',
      type:a.type||'direct',url:a.url||'',x:num(a.x,0),y:num(a.y,1.8),z:num(a.z,0),
      radius:num(a.radius,18),volume:num(a.volume,.5),loop:a.loop!==false
    }));
    settings.tours=arr(settings.tours);
    j.settings=settings;
    j.rooms=arr(j.rooms).map((r,i)=>normalizeRoom(r,i,settings));
    j.partitions=arr(j.partitions||j.halfWalls||j.partitionWalls).map((p,i)=>normalizePartition(p,i,settings));
    const roomIds=new Set(j.rooms.map(r=>r.id));
    const seen=new Set();
    j.hallways=arr(j.hallways).map((h,i)=>normalizeHallway(h,i,settings)).filter(h=>roomIds.has(h.from)&&roomIds.has(h.to)&&h.from!==h.to).map((h,i)=>{
      let id=h.id||'hall'+(i+1);
      while(seen.has(id))id='hall'+(i+1)+'_'+seen.size;
      seen.add(id);
      return {...h,id};
    });
    j.tours=arr(j.tours||settings.tours);
    return j;
  }

  function normalizeArtworkData(data){
    return arr(clone(data)).map((a,i)=>{
      const world=isWorldArtwork(a);
      const mediaType=a.mediaType||a.type||'image';
      return {
        ...a,
        id:a.id||'art'+(i+1),
        title:a.title||'Untitled',
        artist:a.artist||'',
        description:a.description||'',
        room:a.room||a.discipline||(world?'':'main'),
        wall:a.wall||(world?'':'back'),
        x:num(a.x,0),
        y:num(a.y,3),
        width:num(a.width,2),
        height:num(a.height,2),
        mediaType,
        type:mediaType,
        media:a.media||a.image||a.url||'',
        image:a.image||a.media||a.url||'',
        tags:arr(a.tags),
        statementDisplay:a.statementDisplay||'popup',
        statementSide:a.statementSide||'right',
        statementWidth:num(a.statementWidth,2.2),
        statementHeight:num(a.statementHeight,1.1)
      };
    });
  }

  function normalizeProject(project){
    if(!project)return project;
    const p={...project};
    p.id=p.id||'gallery-'+Date.now();
    p.name=p.name||p.title||p.id;
    if(p.layout)p.layout=normalizeLayout(p.layout);
    if(p.data)p.data=normalizeArtworkData(p.data);
    p.siteSettings=p.siteSettings||{};
    return p;
  }
  function loadProjects(){
    return arr(safeJSON(localStorage.getItem(PROJECTS_KEY),[])).map(normalizeProject);
  }
  function saveProjects(projects){
    localStorage.setItem(PROJECTS_KEY,JSON.stringify(arr(projects).map(normalizeProject),null,2));
    localStorage.setItem(PROJECTS_KEY+'-dirty','1');
  }
  function activeGalleryId(){return localStorage.getItem(ACTIVE_KEY)||'repo'}
  function setActiveGalleryId(id){localStorage.setItem(ACTIVE_KEY,id||'repo')}
  function findProject(id){return loadProjects().find(g=>g.id===id)||null}
  function readDraftLayout(){return normalizeLayout(safeJSON(localStorage.getItem(LAYOUT_DRAFT_KEY),{}))}
  function writeDraftLayout(layout){localStorage.setItem(LAYOUT_DRAFT_KEY,JSON.stringify(normalizeLayout(layout),null,2));localStorage.setItem('gallery-layout-dirty','1')}
  function readDraftData(){return normalizeArtworkData(safeJSON(localStorage.getItem(DATA_DRAFT_KEY),[]))}
  function writeDraftData(data){localStorage.setItem(DATA_DRAFT_KEY,JSON.stringify(normalizeArtworkData(data),null,2));localStorage.setItem('gallery-data-dirty','1')}

  window.GalleryState={safeJSON,normalizeLayout,normalizeArtworkData,normalizeProject,loadProjects,saveProjects,activeGalleryId,setActiveGalleryId,findProject,readDraftLayout,writeDraftLayout,readDraftData,writeDraftData};
})();
