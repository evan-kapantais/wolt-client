import React, { useEffect } from "react";
import { Link } from "gatsby";
import Seo from "../components/seo";

const NotFoundPage = () => {
  let interval = null;

  const addOmikrons = e => {
    const emoji = e.currentTarget.querySelector(".fof-emoji");
    const span = e.currentTarget.querySelector(".omikron");

    clearInterval(interval);

    emoji.innerText = "😮";

    interval = setInterval(() => {
      if (span.innerText.length < 10) {
        span.innerText += "o";
      }
    }, 50);
  };

  const substractOmikrons = e => {
    const emoji = e.currentTarget.querySelector(".fof-emoji");
    const span = e.currentTarget.querySelector(".omikron");

    clearInterval(interval);

    emoji.innerText = "😕";

    interval = setInterval(() => {
      if (span.innerText.length > 1) {
        span.innerText = span.innerText.slice(0, -1);
      }
    }, 50);
  };

  return (
    <section className="fof-page">
      <Seo title="404" />
      <div className="fof-container">
        <h1
          className="fof-title"
          onMouseEnter={addOmikrons}
          onMouseLeave={substractOmikrons}
        >
          <span className="fof-emoji">😕</span>
          <br />O
          <span className="omikron" style={{ fontSize: "inherit" }}>
            o
          </span>
          ps!
        </h1>
        <p className="fof-subtitle">
          Looks like the page you requested does not exist. <br />
          <code>404: Not Found</code>
        </p>
        <Link to="/">We think you should go back home now.</Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
