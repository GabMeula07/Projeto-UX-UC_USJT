const menuToggle = document.querySelector('.menu-toggle'); 
const closeMenu = document.querySelector('.close-menu');
const navMenu = document.querySelector('.nav-menu'); 


menuToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});


closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('active');
    document.body.style.overflow = 'auto'; 
});