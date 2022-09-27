const figureSwiper01 = new Swiper('.figureSwiper01', {//인공지능
    // loop: true,
    speed : 100,
    slidesPerView: 1.2,
    spaceBetween: 10,
    // effect: 'fade',
    navigation: {
      nextEl: '.figureSwiper01-button-next',
      prevEl: '.figureSwiper01-button-prev',
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      767: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    },
});
