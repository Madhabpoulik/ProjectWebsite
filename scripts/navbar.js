const mainnav = document.querySelector('.main-nav');
const hamburgermenu = document.querySelector('.hamburger-menu');

hamburgermenu.addEventListener('click', function(){
    mainnav.classList.toggle('open');
});
window.addEventListener('scroll', function(){
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
});

gsap.fromTo('.hero-clipped', {scaleX: 0}, {duration: 1, scaleX: 1});
gsap.fromTo('.logo', {x: 200, opacity: 0}, {duration: 1, delay: .5, x: 0, opacity: 1});
gsap.fromTo('.hamburger-menu', {x: 200, opacity: 0}, {duration: 1, delay: .8, x: 0, opacity: 1});
gsap.fromTo('.hero-textbox', {yPercent: 40, opacity: 0}, {duration: 1, delay: 1.3, yPercent: -50, opacity: 1});