import { animate } from "./helpers";

const modal = (selOpenBtn, selModal, selOverlay, selCloseBtn) => {
  const modal = document.querySelector(selModal);
  const overlay = document.querySelector(selOverlay);

  const openModal = () => {
    if (screen.width > 768) {
      modal.style.display = "block";
      overlay.style.display = "block";
      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.opacity = progress;
          overlay.style.opacity = progress;
        },
      });
    } else {
      modal.style.display = "block";
      overlay.style.display = "block";
    }
  };

  const closeModal = () => {
    if (screen.width > 768) {
      animate({
        duration: 1000,
        timing(timeFraction) {
          return 1 - timeFraction;
        },
        draw(progress) {
          modal.style.opacity = progress;
          overlay.style.opacity = progress;
          if (overlay.style.opacity == 0) {
            modal.style.display = "";
            overlay.style.display = "";
            modal.style.opacity = "";
            overlay.style.opacity = "";
          }
        },
      });
    } else {
      modal.style.display = "";
      overlay.style.display = "";
    }
  };

  try {
    if (!modal || !overlay) {
      throw new Error("Неверные селекторы модалки!!");
    }
    document.body.addEventListener("click", (e) => {
      if (e.target.closest(selOpenBtn)) {
        e.preventDefault();
        openModal();
      } else if (
        e.target.closest(selCloseBtn) ||
        (!e.target.closest(selModal) && modal.style.display)
      ) {
        e.preventDefault();
        closeModal();
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default modal;
