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
