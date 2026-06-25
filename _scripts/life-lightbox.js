/*
  Opens life gallery images in a full-size overlay.
*/

{
  const selector = "[data-lightbox-gallery] .figure-image[href]";
  let links = [];
  let index = 0;
  let overlay;
  let image;

  const close = () => {
    if (!overlay) return;
    overlay.hidden = true;
    document.body.classList.remove("lightbox-open");
    image.removeAttribute("src");
  };

  const show = (nextIndex) => {
    if (!links.length) return;
    index = (nextIndex + links.length) % links.length;
    const link = links[index];
    image.src = link.href;
    image.alt = link.querySelector("img")?.alt || "gallery image";
  };

  const open = (nextIndex) => {
    show(nextIndex);
    overlay.hidden = false;
    document.body.classList.add("lightbox-open");
    overlay.focus();
  };

  const createOverlay = () => {
    overlay = document.createElement("div");
    overlay.className = "life-lightbox";
    overlay.hidden = true;
    overlay.tabIndex = -1;
    overlay.innerHTML = `
      <button class="life-lightbox-close" type="button" aria-label="Close image">&times;</button>
      <button class="life-lightbox-prev" type="button" aria-label="Previous image">&lsaquo;</button>
      <img class="life-lightbox-image" alt="">
      <button class="life-lightbox-next" type="button" aria-label="Next image">&rsaquo;</button>
    `;

    document.body.append(overlay);
    image = overlay.querySelector(".life-lightbox-image");

    overlay.addEventListener("click", (event) => {
      if (
        event.target === overlay ||
        event.target.closest(".life-lightbox-close")
      )
        close();
      else if (event.target.closest(".life-lightbox-prev")) show(index - 1);
      else if (event.target.closest(".life-lightbox-next")) show(index + 1);
    });
  };

  const onLoad = () => {
    links = [...document.querySelectorAll(selector)];
    if (!links.length) return;

    createOverlay();

    links.forEach((link, linkIndex) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        open(linkIndex);
      });
    });

    window.addEventListener("keydown", (event) => {
      if (overlay.hidden) return;
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") show(index - 1);
      if (event.key === "ArrowRight") show(index + 1);
    });
  };

  window.addEventListener("load", onLoad);
}
