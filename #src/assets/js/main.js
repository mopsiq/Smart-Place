


// Bibl

    // SWIPER
        //= ../../../node_modules/swiper/swiper-bundle.js
        var swiper = new Swiper('.swiper-container', {
            autoHeight: true,
            pagination: {
                el: '.swiper-pagination',
            },
            spaceBetween: 150
        });
    // AOS
        //= ../../../node_modules/aos/dist/aos.js
        AOS.init();

document.addEventListener('DOMContentLoaded', () => {
// COMPONENTS IN MAIN

        //= components/header.js
        //= components/burger.js
        //= components/modal.js
        //= components/stars.js
});
// POLYFILL

    // SMOOTH-SCROLL
      //= ../../../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js
      var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 100,
        speedAsDuration: true
      });
