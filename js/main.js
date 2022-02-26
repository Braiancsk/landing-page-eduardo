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

  const swiper2 = new Swiper('.mySwiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
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
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
  });

//funções responsaveis por mudar o background do topo






//funções responsaveis por mudar o background do calendário