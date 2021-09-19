import React, { useEffect } from "react";
import chevron from "../images/chevron-up.svg";
import { Link } from "gatsby";

const BackToTop = () => {
  useEffect(() => {
    console.log(window.scrollY);
    // const button = document.querySelector(".back-to-top");

    // if (window.scrollY > 500) {
    //   button.classList.add("shown");
    // } else {
    //   button.classList.remove("shown");
    // }
  });

  return (
    <Link to="/" className="back-to-top">
      <img src={chevron} alt="back to top" />
    </Link>
  );
};

export default BackToTop;
