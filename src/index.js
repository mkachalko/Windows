import modal from "./modules/modal";
import swiper from "./modules/swiper";
import slider from "./modules/slider";

modal('a[href="#callback"]', ".header-modal", ".overlay", ".header-modal__close");
swiper();
slider({
  selSlider: ".service-slider",
  selSlide: ".service-slide",
  slideActive: "service-slide-active",
  timeInterval: 3000,
});
modal('a[href="#application"]', ".services-modal", ".overlay", ".services-modal__close");
