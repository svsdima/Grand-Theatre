const aos = () => {
    AOS.init({
        disable: function () {
            let maxWidth = 900;
            return window.innerWidth <= maxWidth;
        },
        offset: 200,
        duration: 800,
        once: true,
        
    });
};

export default aos;