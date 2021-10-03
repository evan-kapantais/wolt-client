import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import logo from "../images/wolt-logo.png";

import Footer from "./Footer";

import "../stylesheets/layout.css";

const Layout404 = ({ children }) => {
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FofLayout404;
