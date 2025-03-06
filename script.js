var swiper = new Swiper(".mySwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  }
});