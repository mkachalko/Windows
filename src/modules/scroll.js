import { animate } from "./helpers";

const smoothScroll = () => {
  const scrollBtn = document.querySelector(".smooth-scroll");

  //scrollTop > 660
  scrollBtn.style.cssText = `
  z-index: 10;
  cursor: pointer;
  display: none;
  opacity: 0;
  `;
  const buttonVisible = () => {
    const height = document.documentElement.scrollTop;

    if (height > 600 && scrollBtn.style.opacity == 0) {
      scrollBtn.style.display = "block";
      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          scrollBtn.style.opacity = progress;
        },
      });
    } else if (height <= 600 && scrollBtn.style.opacity == 1) {
      animate({
        duration: 500,
        timing(timeFraction) {
          return 1 - timeFraction;
        },
        draw(progress) {
          scrollBtn.style.opacity = progress;
          if (scrollBtn.style.opacity == 0) {
            scrollBtn.style.display = "none";
          }
        },
      });
    }
  };

  const smoothScroll = () => {
    document.body.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  document.addEventListener("scroll", buttonVisible);
  scrollBtn.addEventListener("click", smoothScroll);
};

export default smoothScroll;
