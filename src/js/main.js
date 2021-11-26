import swiper from './swiper';
import menuBurger from './menuBurger';
import scrolling from './scrolling';
import aos from './aos';

window.addEventListener('DOMContentLoaded', () => {
    aos();
    swiper();
    menuBurger('.menu-btn', '.header__aside', '.menu', '.social');
    scrolling('.pageup', '.header__aside', '.menu', '.menu-btn', '.social');
});