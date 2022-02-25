const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: false,
    slideToClickedSlide:true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    },
  
  });