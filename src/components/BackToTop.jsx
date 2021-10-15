import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const BackToTop = () => (
  <Link to="/" className="back-to-top">
    <span>Back To Top</span>
    <StaticImage
      src="../images/chevron-up-black.svg"
      alt="back to top arrow"
      data-nofocus
    />
  </Link>
);

export default BackToTop;
