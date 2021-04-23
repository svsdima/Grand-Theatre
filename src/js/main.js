import swiper from './swiper';
import menuBurger from './menuBurger';
import scrolling from './scrolling';


window.addEventListener('DOMContentLoaded', () => {
    swiper();
    menuBurger('.menu-btn', '.header__aside', '.menu');
    scrolling('.pageup', '.header__aside', '.menu', '.menu-btn');
});