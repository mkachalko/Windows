import modal from "./modules/modal";
import swiper from "./modules/swiper";
import slider from "./modules/slider";
import timer from "./modules/timer";
import sendForm from "./modules/sendForm";
import inputsValidate from "./modules/inputsValidate";
import modalImage from "./modules/modalImage";

modal('a[href="#callback"]', ".header-modal", ".overlay", ".header-modal__close");
swiper();
slider({
  selSlider: ".service-slider",
  selSlide: ".service-slide",
  slideActive: "service-slide-active",
  timeInterval: 3000,
});
modal('a[href="#application"]', ".services-modal", ".overlay", ".services-modal__close");
timer("23 febryary 2022", "order_1");
timer("23 febryary 2022", "order_2");

inputsValidate("application-form1");
inputsValidate("callback-form2");
inputsValidate("order-form1");
inputsValidate("order-form2");

sendForm({
  formID: "application-form1",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});
sendForm({
  formID: "callback-form2",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});
sendForm({
  formID: "order-form1",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});
sendForm({
  formID: "order-form2",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});
modalImage();
modal(".document-overlay", ".documents-modal", ".overlay", ".documents-modal__close");
