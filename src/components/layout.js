import * as React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

import "../stylesheets/layout.css";

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
