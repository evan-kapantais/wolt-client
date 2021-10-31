import {
  stickHeader,
  showBackToTop,
  animateMenu,
  animateHeader,
} from "../utils/animations";

export const getOrderedTopics = (topics = [], order = []) => {
  const orderedTopics = [];

  order.forEach(title => {
    const found = topics.find(topic => topic.node.title === title);

    if (found) {
      orderedTopics.push(found);
    }
  });

  return orderedTopics;
};

export const initListeners = isLoading => {
  if (typeof window !== "undefined" && !isLoading) {
    window.addEventListener("scroll", showBackToTop);
    window.addEventListener("scroll", stickHeader);
  }
};

export const setDocumentOverflow = (isLoading, isMenuOpen) => {
  const html = window.document.querySelector("html");

  if (!isLoading) {
    isMenuOpen
      ? (html.style.overflowY = "hidden")
      : (html.style.overflowY = "scroll");

    animateHeader(isMenuOpen);
    animateMenu(isMenuOpen);
  }
};

const focusImage = image => {
  const overlay = document.querySelector(".image-overlay");

  const imageElement = image.cloneNode(true);

  // Container approach
  // const container = document.querySelector(".image-overlay__container");
  // container.prepend(imageElement);

  // Overlay approach
  overlay.appendChild(imageElement);

  overlay.classList.add("active");
};

export const addImageListener = section => {
  const images = section.querySelectorAll(".image");

  images.length > 0 &&
    images.forEach(image => {
      if (!image.hasAttribute("data-listening")) {
        image.setAttribute("data-listening", true);
        image.addEventListener("click", () => focusImage(image));
      }
    });
};
