import * as React from "react";
import { Link } from "gatsby";

import logo from "../images/wolt-logo.png";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  React.useEffect(() => {
    if (window.location.pathname === "/") {
      window.addEventListener("scroll", stickHeader);
    }
  }, []);

  React.useEffect(() => {
    const header = document.querySelector(".layout-header");

    isMenuOpen
      ? header.classList.add("layout-header--menu")
      : header.classList.remove("layout-header--menu");
  }, [isMenuOpen]);

  const stickHeader = () => {
    const header = document.querySelector(".layout-header");
    const burger = document.querySelector(".burger");
    const brand = document.querySelector(".brand");

    if (window.scrollY > 0) {
      header.classList.add("layout-header--scrolled");
      brand.classList.add("brand--scrolled");
    } else {
      header.classList.remove("layout-header--scrolled");
      brand.classList.remove("brand--scrolled");
    }

    window.scrollY > window.innerHeight
      ? burger.classList.add("burger--scrolled")
      : burger.classList.remove("burger--scrolled");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // const header = document.querySelector(".layout-header");
    // header.classList.toggle("layout-header--menu");
  };

  return (
    <header className="layout-header">
      <Link
        to="/"
        className="brand"
        onClick={() => window.location.pathname === "/" && setIsMenuOpen(false)}
      >
        <img id="logo" src={logo} alt="wolt logo" data-nofocus />
      </Link>
      <button className="burger" onClick={toggleMenu}>
        <div className="burger-slice" />
        <div className="burger-slice" />
        <div className="burger-slice" />
      </button>
    </header>
  );
};

export default Header;
