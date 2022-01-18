const slider = ({ selSlider, selSlide, slideActive, timeInterval = 1500 }) => {
  const sliderBlock = document.querySelector(selSlider);
  const slides = document.querySelectorAll(selSlide);

  let current = 0;
  let curScreen = 0;
  let interval;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    if (screen.width < 576) {
      if (curScreen === 0) {
        slides.forEach((slide) => slide.classList.remove(slideActive));
      }
      prevSlide(slides, current, slideActive);

      current++;

      if (current >= slides.length) {
        current = 0;
      }

      nextSlide(slides, current, slideActive);
      curScreen++;
    } else {
      prevSlide(slides, current, slideActive);
      if (current - 1 < 0) {
        prevSlide(slides, slides.length - 1, slideActive);
      } else {
        prevSlide(slides, current - 1, slideActive);
      }
      current++;

      for (let i = 0; i < 2; i++) {
        if (current >= slides.length) {
          current = 0;
        }
        if (i === 0) {
          nextSlide(slides, current, slideActive);
          current++;
        } else {
          nextSlide(slides, current, slideActive);
        }
      }

      curScreen = 0;
    }
  };

  const startSlide = () => {
    interval = setInterval(autoSlide, timeInterval);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();

    if (!e.target.closest(".services__arrow")) {
      return;
    }

    if (e.target.closest(".services__arrow--right")) {
      autoSlide();
    } else if (e.target.closest(".services__arrow--left")) {
      prevSlide(slides, current, slideActive);
      current--;
      if (current < 0) {
        current = slides.length - 1;
      }

      if (screen.width < 576) {
        nextSlide(slides, current, slideActive);
      } else {
        prevSlide(slides, current, slideActive);
        current--;
        if (current < 0) {
          current = slides.length - 1;
        }
        nextSlide(slides, current, slideActive);
        if (current - 1 < 0) {
          nextSlide(slides, slides.length - 1, slideActive);
        } else {
          nextSlide(slides, current - 1, slideActive);
        }
      }
    }
  });

  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".services__arrow > img")) {
        stopSlide();
      }
    },
    true
  );

  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".services__arrow > img")) {
        startSlide();
      }
    },
    true
  );

  startSlide();
};
export default slider;
