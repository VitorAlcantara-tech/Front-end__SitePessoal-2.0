const btnMenu = document.getElementById('btn__menu')
const menu = document.getElementById('menu__mobile')
const overlay = document.getElementById('overlay__menu')

btnMenu.addEventListener('click', ()=> {
    menu.classList.add('abrir__menu');
})

menu.addEventListener('click', ()=> {
    menu.classList.remove('abrir__menu');
})

overlay.addEventListener('click', ()=> {
    menu.classList.remove('abrir__menu');
})