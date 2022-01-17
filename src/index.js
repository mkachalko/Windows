import modal from "./modules/modal";
import swiper from "./modules/swiper";
import slider from "./modules/slider";

modal('a[href="#callback"]', ".header-modal", ".overlay", ".header-modal__close");
swiper();
slider();
