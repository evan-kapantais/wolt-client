import React from "react";
import { Link } from "gatsby";

import logo from "../images/wolt-logo.png";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="layout-header">
      <div className="header-container">
        <Link
          to={typeof window !== "undefined" ? window.location.pathname : "#"}
          className="brand"
          onClick={() => setIsMenuOpen(false)}
        >
          <img id="logo" src={logo} alt="wolt logo" data-nofocus />
        </Link>
        <button className="burger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="burger-slice" />
          <div className="burger-slice" />
          <div className="burger-slice" />
        </button>
      </div>
    </header>
  );
};

export default Header;
