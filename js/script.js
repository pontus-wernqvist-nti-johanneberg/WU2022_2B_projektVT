const burger = document.querySelector('.burger') //variabel som är min document query selector för burger
const nav = document.querySelector('.site_navigation_links') // skapar konstant variabel med namn nav som tilldelas det första elementet i HTML-dokumentet som har selektorn '.navlinks'

function toggleMenu() {
    nav.classList.toggle('upper_nav-active') //   
    burger.classList.toggle('toggle')
}

burger.addEventListener('click', toggleMenu)