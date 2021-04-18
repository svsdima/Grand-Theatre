const swiper = () => {
    new Swiper('.poster-slider', {
        navigation: {
            nextEl: '.poster-button-next',
            prevEl: '.poster-button-prev',
        },
        spaceBetween: 50,
        centeredSlides: true,
        speed: 1000,
    });
    
    new Swiper('.image-slider', {
        slidesPerView: 4,
        speed: 1000,
    });
} 

export default swiper;
