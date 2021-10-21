import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import NewsItem from "./NewsItem";

const NewsSection = ({ newsItems }) => {
  const isGreekPage =
    typeof window !== "undefined" && window.location.pathname === "/";

  return (
    <section id="news">
      <StaticImage
        src="../images/phone.png"
        alt="phone"
        className="phone-deco"
        data-nofocus
      />
      <div className="news-container">
        <h1 className="news-title">{isGreekPage ? "Τα Νέα Μας" : "News"}</h1>
        {newsItems.length > 0 ? (
          newsItems.map((newsItem, i) => (
            <React.Fragment key={i}>
              <NewsItem newsItem={newsItem} />
              <hr />
            </React.Fragment>
          ))
        ) : isGreekPage ? (
          <p>
            Δεν υπάρχουν νέα αυτή τη στιγμή. Μπορείς να συνεχίσεις{" "}
            <Link to="#select-topic">παρακάτω</Link>.
          </p>
        ) : (
          <p>
            There's no news at the moment. You can{" "}
            <Link to="#select-topic">move on</Link>.
          </p>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
