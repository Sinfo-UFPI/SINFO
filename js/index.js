const menuButton = document.querySelector('.menu');
const menuVisible = document.querySelector('.menu-visible');

menuButton.addEventListener('click', () => {
    menuVisible.classList.toggle('active'); // Ativa ou desativa o menu
    menuButton.parentElement.classList.toggle('active'); // Para o menu mobile
});

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
    menuVisible.classList.remove('active'); // Fecha o menu
    menuButton.parentElement.classList.remove('active');
});
