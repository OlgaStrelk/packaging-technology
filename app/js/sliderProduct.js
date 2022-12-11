const slider = new Swiper(".recommended__slider", {
    slidesPerView: 4,
    spaceBetween: 15,
    direction: "horizontal",
    loop: true,

    pagination: {
        el: ".slider__pagination",
        clickable: true,
    },
    centeredSlides: false,
    autoHeight: true,

    navigation: {
        nextEl: ".slider__next",
        prevEl: ".slider__prev",

    },

    speed: 800,

    // breakpoints: {
    //     1000: {
    //         slidesPerView: 4,
    //     }
    // },

});
