const newsSwiperGap = window.innerWidth < 768 ? 15: (window.innerWidth / 100) * 1.30208333333;
const newsSwiper = new Swiper(".newsSwiper", {
  slidesPerView: "auto",
  spaceBetween: newsSwiperGap,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  
});