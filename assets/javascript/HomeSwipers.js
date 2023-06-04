const homeSwiperGap = window.innerWidth < 768 ? 15: (window.innerWidth / 100) * 1.66666666667;
const homeSwiper = new Swiper(".homeSwipers", {
  slidesPerView: "auto",
  spaceBetween: homeSwiperGap,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  
});