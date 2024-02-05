let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
 

  var homeswiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    effect: "fade",
    rewind: true, 
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


var revswiper = new Swiper(".review-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop:true,
    rewind: true,
    freeMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:2,
        },
        
         
    },
});



 var revswiper = new Swiper(".testimonial_slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop:true,
    rewind: true,
 
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:1,
        },
        991:{
            slidesPerView:1,
        },
        
         
    },
});

 