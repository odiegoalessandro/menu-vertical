var btn = document.getElementById('menu-button')
var container = document.getElementById('container')
btn.addEventListener('click', () => {
    container.classList.toggle('showMenu')
})