const btnHambuger = document.querySelector('[data-menu-button]')
const menuActive = document.querySelectorAll('[data-menu]')

btnHambuger.addEventListener('click', () => {
    menuActive.forEach(menu => menu.toggleAttribute('data-active-menu'))
})