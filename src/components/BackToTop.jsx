import React, { useEffect } from "react";
import chevron from "../images/chevron-up.svg";
import { Link } from "gatsby";

const BackToTop = () => (
  <Link to="/" className="back-to-top">
    <img src={chevron} alt="back to top" />
  </Link>
);

export default BackToTop;
