const animateMenuItems = isMenuOpen => {
  const menuItems = document.querySelectorAll(".menu-list__item");

  if (isMenuOpen) {
    for (let i = 0; i < menuItems.length; ++i) {
      menuItems[i].style.transitionDelay = `${300 + i * 100}ms`;
      menuItems[i].classList.add("menu-list__item--shown");
    }
  } else {
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].style.transitionDelay = "0ms";
      menuItems[i].classList.remove("menu-list__item--shown");
    }
  }
};

const animateMenuDeco = isMenuOpen => {
  const menuDeco = document.querySelector(".menu-deco");

  isMenuOpen
    ? menuDeco.classList.add("menu-deco--shown")
    : menuDeco.classList.remove("menu-deco--shown");
};

export const animateMenu = isMenuOpen => {
  const menu = document.querySelector(".menu");

  isMenuOpen
    ? menu.classList.add("menu--shown")
    : menu.classList.remove("menu--shown");

  animateMenuItems(isMenuOpen);
  animateMenuDeco(isMenuOpen);
};

const animateBurger = isMenuOpen => {
  const burgerSlices = document.querySelectorAll(".burger-slice");

  burgerSlices.forEach(slice =>
    isMenuOpen
      ? slice.classList.add("burger-slice--close")
      : slice.classList.remove("burger-slice--close")
  );
};

const fixMenuHeader = isMenuOpen => {
  const header = document.querySelector(".layout-header");

  isMenuOpen
    ? header.classList.add("layout-header--menu")
    : header.classList.remove("layout-header--menu");
};

export const animateHeader = isMenuOpen => {
  fixMenuHeader(isMenuOpen);
  animateBurger(isMenuOpen);
};

export const stickHeader = () => {
  const header = document.querySelector(".layout-header");
  const burger = document.querySelector(".burger");
  const brand = document.querySelector(".brand");

  if (window.scrollY > 0) {
    header.classList.add("layout-header--scrolled");
    brand.classList.add("brand--scrolled");
  } else {
    header.classList.remove("layout-header--scrolled");
    brand.classList.remove("brand--scrolled");
  }

  window.scrollY > window.innerHeight
    ? burger.classList.add("burger--scrolled")
    : burger.classList.remove("burger--scrolled");
};