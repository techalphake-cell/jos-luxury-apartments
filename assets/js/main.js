//Nav-bar toggle logic
const hamburgerButton = document.querySelector(".nav-toggle");
const navBar = document.querySelector("#primary-navigation");

hamburgerButton.addEventListener("click", () => {
  const hamburgerState = hamburgerButton.getAttribute("aria-expanded");
  const state = hamburgerState === "true";
  const newState = !state;
  hamburgerButton.setAttribute("aria-expanded", newState);
  navBar.classList.toggle("primary-nav--is-open");
});
//gallery scroll logic

const galleryWrappers = document.querySelectorAll(".gallery-wrapper");

galleryWrappers.forEach((wrapper) => {
  const gallery = wrapper.querySelector(".gallery");
  const nav_next = wrapper.querySelector(".gallery-nav--next");
  const nav_prev = wrapper.querySelector(".gallery-nav--prev");

  function getScrollAmount() {
    const image = gallery.querySelector(".gallery__image");
    if (!image) return 0;

    // Read the actual computed gap between images from CSS
    const gap = parseFloat(getComputedStyle(gallery).gap) || 0;

    // Return the full width of one image plus the gap
    return image.offsetWidth + gap;
  }

  nav_next.addEventListener("click", () => {
    gallery.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth",
    });
  });

  nav_prev.addEventListener("click", () => {
    gallery.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth",
    });
  });
});
