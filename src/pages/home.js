import React from "react";
import Seo from "../components/seo";
import { Link } from "gatsby";
import Layout from "../components/layout";

import "./home.css";

const home = () => {
  return (
    <Layout>
      <Seo title="home" />
      <div className="top-banner">
        <div className="banner__overlay" />
        <div id="home-page__container">
          <p id="home-page__sub">
            Συχνές Ερωτήσεις <br /> Συνεργατών
          </p>
          <Link to="/" className="button">
            <span>Ξεκίνα Εδώ →</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default home;
