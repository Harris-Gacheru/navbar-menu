let toggleMenu = () => {
    let menu = document.getElementById('menu')

    if (menu.classList.contains('close-menu')) {
        menu.classList.remove('close-menu')
        menu.classList.add('open-menu')
    } else {
        menu.classList.remove('open-menu')
        menu.classList.add('close-menu')
    }
}