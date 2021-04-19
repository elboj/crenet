/**
 * Toggle functionality for main menu
 */

const toggler = document.getElementById("toggle");
const nav = document.querySelector(".nav_bar");
const header = document.querySelector(".header");
const lightImg = document.querySelector(".nav_logo");
const darkImg = document.querySelector(".nav_logo_one");

//for the hamburger fix, get an SVG icon or use font awesome and just change the color

toggler.addEventListener("click", () => {
  if (lightImg.classList.contains("nav_logo")) {
    lightImg.classList.toggle("nav_logo_hide");
  }

  if (darkImg.classList.contains("nav_logo_one")) {
    darkImg.classList.toggle("nav_logo_one_show");
  }

  if (nav.classList.contains("nav_bar")) {
    nav.classList.toggle("nav_bar_show");
  }

  if (header.classList.contains("header")) {
    header.classList.toggle("header_bg_toggle");
  }
});

/**
 * smooth scroll icon animation
 */
