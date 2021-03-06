const scrolling = (upSelector, ...menuTrigger) => {
    const menu = document.querySelectorAll(menuTrigger);
    /* Появление стрелки вверх */
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1000) {
            upElem.style.pointerEvents = "all";
            upElem.style.opacity = "1";
        } else {
            upElem.style.pointerEvents = "none";
            upElem.style.opacity = "0";
        }
    });

    /* Скролл при помощи requestAnimationFrame */
    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.15;

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            menu.forEach((e) => {
                e.classList.remove('active');
            });

            let widthTop = document.documentElement.scrollTop,
            hash = this.hash,
            toBlock = document.querySelector(hash).getBoundingClientRect().top,
            start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r);

                    if (r != widthTop + toBlock) {
                        requestAnimationFrame(step);
                    } else {
                        location.hash = hash;
                    }
            }
        });
    });
};

export default scrolling;