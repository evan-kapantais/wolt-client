import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import logo from "../images/wolt-logo.png";

import Header from "./Header";
import Footer from "./Footer";

import "../stylesheets/layout.css";

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
