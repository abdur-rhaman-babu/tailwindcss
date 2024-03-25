const navMenu = document.getElementById('nav-menu')
const navIcon = document.getElementById('nav-icon')

navIcon.addEventListener('click', ()=>{
    navMenu.classList.toggle('hidden')
})