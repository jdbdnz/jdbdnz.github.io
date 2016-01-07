document.addEventListener("DOMContentLoaded", function(){
  if(window.location.host != 'jdbd.nz' && !window.location.host.includes('localhost:')){
    window.location = "http://jdbd.nz"+window.location.pathname+window.location.hash
  }
});