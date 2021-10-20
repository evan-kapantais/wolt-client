import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const BackToTop = () => {
  const scrollToTop = () => {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  };

  return (
    <button type="button" className="back-to-top" onClick={scrollToTop}>
      <span>Back To Top</span>
      <StaticImage
        src="../images/chevron-up-black.svg"
        alt="back to top arrow"
        data-nofocus
      />
    </button>
  );
};

export default BackToTop;
