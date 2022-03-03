
  const gallery = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    watchSlidesProgress: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    loop: true,
  });


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    loopedSlides:5,
    slidesPerView: "auto",
    spaceBetween: 20,
    centeredSlides: false,
    slideToClickedSlide:true,

    breakpoints: {
      640: {
        slidesPerView: "auto",
        spaceBetween: 20,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: "auto",
        spaceBetween: 20,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    },
    thumbs: {
      swiper: gallery,
    },
  });

//funções responsaveis por mudar o background do topo
  let torneio = document.querySelector('[data-torneio]')
  let data = document.querySelector('[data-date]')
  let bgImage = document.querySelector('[data-background]')

  swiper.on('slideNextTransitionStart', function (e) {
    let slides = [...swiper.$wrapperEl[0].children]
    let slideActive = slides.find(active => active.className == 'swiper-slide swiper-slide-active');
    let slideActiveRepater = slides.find(active => active.className == 'swiper-slide swiper-slide-duplicate-active');
   
    
    if(slideActive != undefined){
      torneio.textContent = slideActive.children[1].innerText
      data.textContent = slideActive.children[2].innerText
    }
   
    if(slideActiveRepater != undefined){
      torneio.textContent = slideActiveRepater.children[1].innerText
      data.textContent = slideActiveRepater.children[2].innerText
    }
  
  });

  swiper.on('slidePrevTransitionStart', function(){
    let slides = [...swiper.$wrapperEl[0].children]
    let slideActive = slides.find(active => active.className == 'swiper-slide swiper-slide-active');
    let slideActiveRepater = slides.find(active => active.className == 'swiper-slide swiper-slide-duplicate-active');
   

    if(slideActive != undefined){
      torneio.textContent = slideActive.children[1].innerText
      data.textContent = slideActive.children[2].innerText
    }
   
    if(slideActiveRepater != undefined){
      torneio.textContent = slideActiveRepater.children[1].innerText
      data.textContent = slideActiveRepater.children[2].innerText
    }

  })

  //funções responsaveis por mudar o background do calendário
  
  const handleTab = (e) =>{
    console.dir(e)
  }

  let kidTab = document.querySelectorAll('[data-kid-tab]')
  let kidsImage = document.querySelector('[data-kid]')
  kidTab.forEach(tab =>{
    tab.addEventListener('click',()=>{
      switch (tab.innerText) {
        case 'Tênis':
          kidsImage.src = '../images/calendario.png'
          break;
        case 'Kids':
          kidsImage.src = '../images/kid.png'
          break;
        case 'Beach Tennis':
          kidsImage.src = '../images/kid.png'
          break;
        default:
          break;
      }
    })
  })

  let tabelasTab = document.querySelectorAll('[data-tabelas]')
  tabelasTab.forEach(tab =>{
    tab.addEventListener('click',()=>{
      switch (tab.innerText) {
        case 'Tênis':
          console.log('tênis')
          break;
        case 'Beach Tennis':
          console.log('beach tennis')
          break;
        case 'Kids':
          console.log('kids')
          break;
        default:
          break;
      }
    })
  })



  const swiper2 = new Swiper('.mySwiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: false,
    slideToClickedSlide:false,
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

  const swiper4 = new Swiper('.swiper3', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    preventInteractionOnTransition:true,
    centeredSlides:false,
    slideToClickedSlide:true,
    setWrapperSize:true,
    breakpoints: {
      640: {
        slidesPerView: 'auto',
        spaceBetween: 0,
      },
      768: {
        slidesPerView:'auto',
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 0,
      },
    },
  
  });
 