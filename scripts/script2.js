//Navigation
const openbtn = document.getElementById('open-menu');
const menu = document.getElementById('overlay');

openbtn.onclick =  function functionName() {
  openbtn.classList.toggle('active')
  menu.classList.toggle('active')
}

document.onclick = function(clickEvent){
  if (clickEvent.target.id !== 'open-menu' && clickEvent.target.id !== 'overlay') {
    openbtn.classList.remove('active')
    menu.classList.remove('active')
  }
}
