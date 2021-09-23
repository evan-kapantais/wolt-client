import * as React from "react";
import { Link } from "gatsby";

import logo from "../images/wolt-logo.png";

const Header = () => {
  React.useEffect(() => {
    if (window.location.pathname === "/") {
      window.addEventListener("scroll", stickHeader);
    }
  }, []);

  function stickHeader() {
    const header = document.querySelector(".layout-header");
    const classname = "layout-header__content";

    window.scrollY > 0
      ? header.classList.add(classname)
      : header.classList.remove(classname);
  }

  return (
    <header className="layout-header">
      <Link to="/" className="brand">
        <img id="logo" src={logo} alt="wolt logo" data-nofocus />
      </Link>
    </header>
  );
};

export default Header;
