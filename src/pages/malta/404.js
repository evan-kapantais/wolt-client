import React from "react";
import { Link } from "gatsby";
import Seo from "../../components/seo";
import "../stylesheets/404.css";

const NotFoundPage = () => {
  return (
    <section className="fof-page">
      <Seo title="404" />
      <div className="fof-container">
        <h1 className="fof-title">
          <span className="fof-emoji">😕</span>
          <br />
          Oops!
        </h1>
        <p className="fof-subtitle">
          Looks like the page you requested does not exist. <br />
          <code>404: Not Found</code>
        </p>
        <Link to="/malta">We think you should go back home now.</Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
