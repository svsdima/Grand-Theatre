const swiper = () => {
    new Swiper('.poster-slider', {
        spaceBetween: 50,
        centeredSlides: true,
        speed: 1000,
        breakpoints: {
            320: {
                pagination: {
                    el: '.poster-pagination',
                    clickable: true,
                },
            },
            1024: {
                navigation: {
                    nextEl: '.poster-button-next',
                    prevEl: '.poster-button-prev',
                },
            }
        }
    });

    if (window.innerWidth < 1024) {
        document.querySelector('.poster-button-next').style.display = 'none';
        document.querySelector('.poster-button-prev').style.display = 'none';
    }
    
    new Swiper('.image-slider', {
        slidesPerView: 4,
        speed: 1000,
        breakpoints: {
            320: {
                slidesPerView: 1,
                pagination: {
                    el: '.image-pagination',
                    clickable: true,
                },
            },
            425: {
                slidesPerView: 2,
                pagination: {
                    el: '.image-pagination',
                    clickable: true,
                },
            },
            768: {
                slidesPerView: 3,
                pagination: {
                    el: '.image-pagination',
                    clickable: true,
                },
            },
            1024: {
                slidesPerView: 4,
            },
        }
    });
} 

export default swiper;
