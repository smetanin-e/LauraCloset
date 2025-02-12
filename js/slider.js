
const smallSlider = new Swiper('.small-slider', {
    navigation: {
        nextEl: ".down",
        prevEl: ".up",
      },
    direction: 'vertical',
    slidesPerView: "auto",
    spaceBetween: 10,
});

const bigSlider = new Swiper('.big-slider', {
    effect: 'fade',
    thumbs: {
        swiper: {
            el: '.small-slider',
            direction: 'vertical',
            slidesPerView: "auto",
            freeMode: true,
            spaceBetween: 10,
           /* mousewheel: {
                sensitivity: 1
              },*/
            
        }
    }
})
/*
let slides = document.querySelectorAll('.small-slider__slide'); 
slides.forEach((slide,index) => slide.addEventListener('mouseenter', () => { 
    bigSlider.slideTo(index) 
    }));*/
           