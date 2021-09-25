import * as React from "react";
import { Link } from "gatsby";

import logo from "../images/wolt-logo.png";
import { animateHeader, stickHeader } from "../utils/animations";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  // Add window scroll event listener
  React.useEffect(() => {
    if (window.location.pathname === "/") {
      window.addEventListener("scroll", stickHeader);
    }
  }, []);

  // Animate header when opening / closing the menu
  React.useEffect(() => {
    animateHeader(isMenuOpen);
  }, [isMenuOpen]);

  return (
    <header className="layout-header">
      <Link
        to="/"
        className="brand"
        onClick={() => window.location.pathname === "/" && setIsMenuOpen(false)}
      >
        <img id="logo" src={logo} alt="wolt logo" data-nofocus />
      </Link>
      <button className="burger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="burger-slice" />
        <div className="burger-slice" />
        <div className="burger-slice" />
      </button>
    </header>
  );
};

export default Header;
