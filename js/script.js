const burger = document.querySelector('.burger')
const nav = document.querySelector('.site_navigation_links') 

function toggleMenu() {
    nav.classList.toggle('upper_nav-active') 
    burger.classList.toggle('toggle')
}

burger.addEventListener('click', toggleMenu)    