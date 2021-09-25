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

  // isMenuOpen
  //   ? (menu.style.transform = "translateY(0px)")
  //   : (menu.style.transform = "translateY(calc(-100% - 63px))");

  isMenuOpen
    ? menu.classList.add("menu--shown")
    : menu.classList.remove("menu--shown");

  animateMenuItems(isMenuOpen);
  animateMenuDeco(isMenuOpen);
};
