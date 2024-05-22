document.addEventListener('DOMContentLoaded', (event) => {
    const sobreButton = document.getElementById('sobreButton');
    const sobreMenu = document.getElementById('sobreMenu')
    const sobreContainer = document.getElementById('sobreContainer');
    const fecharButton = document.getElementById('fecharButton');

    sobreButton.addEventListener('click', () => {
        sobreContainer.classList.remove('hidden-btn');
    });

    sobreMenu.addEventListener('click', () => {
        sobreContainer.classList.remove('hidden-btn');
    });

    fecharButton.addEventListener('click', () => {
        sobreContainer.classList.add('hidden-btn');
    });
});

// Menu Mobile

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})