import { addImageListener, formatImages } from "./helpers";

const windowExists = typeof window !== "undefined";

const reducedMotionQuery =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)");

// Helpers
const getShowtime = element =>
  element.getBoundingClientRect().top - window.innerHeight;

const removeTableStyles = tables => {
  tables.forEach(table => {
    const elements = table.querySelectorAll("*");

    table.removeAttribute("style");

    elements.forEach(element => element.removeAttribute("style"));
  });
};

// Animate elements on menu open

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

export const animateMenu = isMenuOpen => {
  const menu = document.querySelector(".menu");

  isMenuOpen
    ? menu.classList.add("menu--shown")
    : menu.classList.remove("menu--shown");

  animateMenuItems(isMenuOpen);
};

const animateBrandLink = isMenuOpen => {
  const brand = document.querySelector(".brand");
  const menuHeight = document
    .querySelector(".menu")
    .getBoundingClientRect().height;

  isMenuOpen
    ? (brand.style.top = `${
        menuHeight / 2 - (window.innerWidth * 20) / 100 / 2 + 31
      }px`)
    : brand.removeAttribute("style");
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

  if (isMenuOpen) {
    header.classList.add("layout-header--menu");
    header.classList.remove("layout-header--scrolled");
  } else {
    header.classList.add("layout-header--scrolled");
    header.classList.remove("layout-header--menu");
  }

  !reducedMotionQuery.matches &&
    windowExists &&
    window.innerWidth > 560 &&
    animateBrandLink(isMenuOpen);
};

export const animateHeader = isMenuOpen => {
  fixMenuHeader(isMenuOpen);
  animateBurger(isMenuOpen);
};

export const stickHeader = () => {
  const header = document.querySelector(".layout-header");
  const burger = document.querySelector(".burger");

  window.scrollY > window.innerHeight
    ? header.classList.add("layout-header--scrolled")
    : header.classList.remove("layout-header--scrolled");

  window.scrollY > window.innerHeight
    ? burger.classList.add("burger--scrolled")
    : burger.classList.remove("burger--scrolled");
};

// Animate on scroll

export const scrollBanner = () => {
  if (!reducedMotionQuery.matches) {
    const textWrapper = document.querySelector(".banner__text-wrapper");
    const imageWrapper = document.querySelector(".image-wrapper");
    const heading = document.querySelector(".banner__heading-wrapper");

    textWrapper.style.transform = `translateY(-${window.scrollY / 20}px)`;

    if (typeof window !== "undefined" && window.innerWidth > 1260) {
      imageWrapper.style.transform = `translateX(${window.scrollY / 20}px)`;
    }

    heading.style.transform = `translateX(-${window.scrollY / 20}px)`;
    heading.style.opacity = 1 - window.scrollY / 400;
  }
};

export const showSections = () => {
  if (!reducedMotionQuery.matches) {
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
      getShowtime(section) <= 0 && section.classList.add("active");

      // Delete empty elements
      const contentPars = document.querySelectorAll(".section-content *");
      contentPars.forEach(par => {
        if (par.innerHTML === "&nbsp;") {
          par.remove();
        }
      });
    });

    if (sections[sections.length - 1]?.classList.contains("active")) {
      window.document.removeEventListener("scroll", showSections);
    }
  }
};

export const showTopicButtons = () => {
  const topics = document.querySelectorAll(".topics-grid li");

  for (let i = 0; i < topics.length; ++i) {
    topics[i].style.transitionDelay = `${i * 50}ms`;
    getShowtime(topics[i]) <= 0 && topics[i].classList.add("active");
  }

  if (topics[topics.length - 1]?.classList.contains("active")) {
    window.document.removeEventListener("scroll", showTopicButtons);

    topics.forEach(topic => {
      setTimeout(() => {
        topic.removeAttribute("style");
      });
    });
  }
};

export const showAside = () => {
  const items = document.querySelectorAll(".aside-list-item");

  if (items) {
    for (let i = 0; i < items.length; ++i) {
      items[i].style.transitionDelay = `${i * 100}ms`;
    }

    getShowtime(items[items.length - 1]) <= 0 &&
      items.forEach(item => item.classList.add("active"));

    if (items[items.length - 1]?.classList.contains("active")) {
      window.document.removeEventListener("scroll", showAside);
    }
  }
};

export const showDeco = () => {
  const decoImage = document.querySelector(".deco-image");

  getShowtime(decoImage) <= 0 && decoImage.classList.add("active");

  decoImage.classList.contains("active") &&
    window.removeEventListener("scroll", showDeco);
};

export const showNews = () => {
  const newsContainer = document.querySelector(".news-container");
  const phone = document.querySelector(".phone-deco");
  const tables = newsContainer.querySelectorAll(".table");

  tables.length > 0 && removeTableStyles(tables);

  newsContainer &&
    getShowtime(newsContainer) <= 0 &&
    newsContainer.classList.add("active");

  if (phone) {
    setTimeout(() => {
      phone.style.transitionDelay = "0ms";
    }, 2500);
    getShowtime(phone) <= 0 && phone.classList.add("active");
  }
};

export const scrollNews = () => {
  if (!reducedMotionQuery.matches) {
    const phone = document.querySelector(".phone-deco");

    if (phone && phone.classList.contains("active")) {
      phone.style.bottom = `${8 + window.scrollY / 500}rem`;
    }
  }
};

// Sections

const resetAllIcons = () => {
  const allSectionIcons = document.querySelectorAll(".section-title__icon");

  allSectionIcons.forEach(si => {
    const dashHor = si.querySelectorAll("img")[1];

    si.classList.remove("active");
    dashHor.style.transform = "scale(1)";
  });
};

const collapseAll = () => {
  const allSectionTitles = document.querySelectorAll(".section-title__button");
  const allSectionContent = document.querySelectorAll(".section-content");

  allSectionContent.forEach(sc => {
    if (sc.style.maxHeight) {
      sc.style.maxHeight = null;
      sc.style.padding = "0 1rem";
    }
  });

  allSectionTitles.forEach(st => st.classList.remove("active"));

  resetAllIcons();
};

export const toggleSection = e => {
  const title = e.currentTarget;
  const section = e.currentTarget.parentElement;
  const content = title.nextElementSibling;
  const icon = title.querySelector(".section-title__icon");
  const dashHor = icon.querySelectorAll("img")[1];

  const isMouseClick = e.screenX > 0 && e.screenY > 0;
  const isEnterKey = e.code === "Enter";
  const isSpaceKey = e.code === "Space";

  if (!isMouseClick && !isEnterKey && !isSpaceKey) {
    return;
  }

  // Collapse section
  if (content.style.maxHeight) {
    icon.classList.remove("active");
    icon.classList.add("section-title__icon--hover");
    dashHor.style.transform = "scale(1)";
    title.classList.remove("active");
    content.style.maxHeight = null;
    content.style.padding = "0 1rem";
    // Expand section
  } else {
    collapseAll();
    addImageListener(section);
    formatImages(section);
    icon.classList.add("active");
    icon.classList.remove("section-title__icon--hover");
    dashHor.style.transform = "scale(0)";
    title.classList.add("active");
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.padding = "1rem";
  }
};

export const hoverSection = e => {
  const section = e.currentTarget.parentElement;
  const icon = e.currentTarget.querySelector(".section-title__icon");
  const tables = section.querySelectorAll(".table");

  icon.classList.add("section-title__icon--hover");

  tables.length > 0 && removeTableStyles(tables);
};

export const leaveSection = e => {
  const icon = e.currentTarget.querySelector(".section-title__icon");
  icon.classList.remove("section-title__icon--hover");
};

// Back to top

export const showBackToTop = () => {
  const backTotop = document.querySelector(".back-to-top");

  window.scrollY > window.innerHeight * 2
    ? backTotop.classList.add("active")
    : backTotop.classList.remove("active");
};

// Load animations

export const animateBanner = () => {
  if (!reducedMotionQuery.matches) {
    const textWrapper = document.querySelector(".banner__text-wrapper");
    const imageWrapper = document.querySelector(".image-wrapper");
    const heading = document.querySelector(".banner__heading-wrapper");
    const pars = document.querySelectorAll(".banner__paragraphs p");
    const version = document.querySelector(".version");
    const scrollLink = document.querySelector(".scroll-link__banner");

    imageWrapper.classList.add("active");
    textWrapper.classList.add("active");
    heading.classList.add("active");
    pars.forEach(par => par.classList.add("active"));
    version.classList.add("active");
    scrollLink.classList.add("active");

    setTimeout(() => {
      heading.style.transitionDelay = "0ms";
      imageWrapper.style.transitionDelay = "0ms";
      pars.forEach(par => (par.style.transitionDelay = "0ms"));
      version.style.transitionDelay = "0ms";
      scrollLink.style.transitionDelay = "0ms";
    }, 2000);
  }
};
