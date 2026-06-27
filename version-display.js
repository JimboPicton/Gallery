(function(){
  const nodes=[...document.querySelectorAll('[data-gallery-version]')];
  const fallback=(nodes[0]?.textContent||'v9.30.4').trim();
  function apply(value){
    const version=String(value||fallback).replace(/^v/i,'');
    const label='v'+version;
    nodes.forEach(node=>node.textContent=label);
    if(/v\d+\.\d+(?:\.\d+)?[A-Z]?/i.test(document.title)){
      document.title=document.title.replace(/v\d+\.\d+(?:\.\d+)?[A-Z]?/i,label);
    }
  }
  apply(fallback);
  fetch('./version.json?ts='+Date.now(),{cache:'no-store'})
    .then(response=>response.ok?response.json():Promise.reject(new Error('version.json')))
    .then(data=>apply(data.version))
    .catch(()=>apply(fallback));
})();
