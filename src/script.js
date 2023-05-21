$(".slider-gallery_component").each(function (index) {
  const swiper = new Swiper($(this).find(".swiper.is-slider-bg")[0], {
    slidesPerView: 1,
    speed: 900,
    keyboard: true
  });
});
