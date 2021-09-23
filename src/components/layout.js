import * as React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Header />
      <main>{children}</main>
      {window.location.pathname !== "/home" && <Footer />}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
