const hamburger = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})