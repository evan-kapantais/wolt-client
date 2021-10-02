import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import logo from "../images/wolt-logo.png";

import Header from "./Header";
import Footer from "./Footer";

import "../stylesheets/layout.css";

export const FofLayout = ({ children }) => {
  return (
    <div id="layout-404">
      <header className="fof-header">
        <Link to="/" className="brand">
          <img id="logo" src={logo} alt="wolt logo" data-nofocus />
        </Link>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

const Layout = ({ children, isMenuOpen, setIsMenuOpen }) => {
  const is404Page =
    typeof window !== "undefined" && window.location.pathname === "/404/";

  return (
    <div id={is404Page ? "layout-404" : "layout"}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
