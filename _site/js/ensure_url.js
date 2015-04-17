document.addEventListener("DOMContentLoaded", function(){
  if(window.location.host != 'jdbd.nz' && window.location.host != 'localhost:4000'){
    window.location = "http://jdbd.nz"+window.location.pathname+window.location.hash
  }
});