import React from "react";
import { Link } from "gatsby";

import logo from "../images/logo-circle.svg";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="layout-header">
      <div className="header-container">
        <Link
          to={typeof window !== "undefined" ? window.location.pathname : "#"}
          className="brand"
          onClick={() => setIsMenuOpen(false)}
        >
          <img id="logo" src={logo} alt="wolt logo" />
        </Link>
        <button
          className="burger"
          aria-label="toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="burger-slice" />
          <div className="burger-slice" />
          <div className="burger-slice" />
        </button>
      </div>
    </header>
  );
};

export default Header;
