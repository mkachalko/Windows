import Swiper, { Navigation, Autoplay } from "swiper";
Swiper.use([Navigation, Autoplay]);

const swiper = () => {
  const arrPrev = document.querySelector(".benefits__arrow--left");
  const arrNext = document.querySelector(".benefits__arrow--right");
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: arrNext,
      prevEl: arrPrev,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  document.querySelector(".benefits-inner").style.maxWidth = "min-content";
  document.querySelectorAll(".benefits__item").forEach((item) => (item.style.maxWidth = "none"));
};

export default swiper;
