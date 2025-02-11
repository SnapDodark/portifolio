// Seleciona o menu hamburguer e a lista de navegação
const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('.nav-list');

// Adiciona um evento de clique para alternar a classe 'active' na lista
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});
