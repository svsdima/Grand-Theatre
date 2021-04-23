const menuBurger = (burgerTrigger, ...menuTrigger) => {
    const burger = document.querySelector(burgerTrigger);
    const menu = document.querySelectorAll(menuTrigger);

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.forEach((e) => {
            e.classList.toggle('active');
        })
    });

    if (window.innerWidth > 1024) {
        menu.forEach((e) => {
            e.classList.remove('active');
        });
    }
}

export default menuBurger;