const modalImage = () => {
  const section = document.getElementById("documents");
  const overlays = section.querySelectorAll(".document-overlay");

  const modal = document.createElement("div");
  const modalContent = document.createElement("img");
  const closeBtn = document.createElement("span");

  overlays.forEach((overlay) => {
    overlay.style.width = "200px";
    overlay.style.left = "50%";
    overlay.style.transform = "translateX(-50%)";
    overlay.style.transform = "translateX(-50%)";
  });

  document.styleSheets[3].insertRule(
    ".document-overlay:hover {opacity: 1;}",
    document.styleSheets[3].cssRules.length
  );

  modal.classList.add("documents-modal");
  modal.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    display: none;
  `;

  closeBtn.classList.add("documents-modal__close");
  closeBtn.style.cssText = `
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 25px;
    cursor: pointer;
  `;
  closeBtn.textContent = "X";

  modal.append(modalContent);
  modal.append(closeBtn);
  section.append(modal);

  document.body.addEventListener("click", (e) => {
    if (e.target.matches(".document-overlay")) {
      e.preventDefault();
      const imgScr = e.target.parentNode.getAttribute("href");
      modalContent.src = imgScr;
      modalContent.style.maxHeight = document.documentElement.clientHeight + "px";
    } else if (e.target.matches(".overlay, .documents-modal__close")) {
      setTimeout(() => {
        modalContent.src = "";
        modalContent.style.maxHeight = "";
      }, 1000);
    }
  });
};

export default modalImage;
