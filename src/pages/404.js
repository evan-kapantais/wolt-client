import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <div className="fof-container">
        <h1 className="fof-title">
          😮
          <br />O
          <span className="omikron" style={{ fontSize: "inherit" }}>
            o
          </span>
          ps!
        </h1>
        <p className="fof-subtitle">
          Looks like the page you requested does not exist (
          <code>404: Not Found</code>).
        </p>
        <Link className="fof-link" to="/">
          We think you should go back home now.
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
