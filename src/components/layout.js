import * as React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "../components/BackToTop";

import "../stylesheets/layout.css";

const Layout = ({ children, isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="layout">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        {children}
        <BackToTop />
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
