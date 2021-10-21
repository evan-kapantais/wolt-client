import {
  handleScroll,
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
    window.addEventListener("scroll", handleScroll);
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
