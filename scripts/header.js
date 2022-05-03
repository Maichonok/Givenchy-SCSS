const burgerButton = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const closeButton = menu.querySelector(".header__menu-close-btn");

menu.querySelectorAll(".header__menu-link").forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.toggle("header__menu_active");
    document.body.style.overflow = "auto";
  })
);

burgerButton.addEventListener("click", () => {
  menu.classList.toggle("header__menu_active");
  document.body.style.overflow = "auto";
});

closeButton.addEventListener("click", () => {
  menu.classList.toggle("header__menu_active");
  document.body.style.overflow = "auto";
});

