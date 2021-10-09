import { Link } from "gatsby";
import React, { useEffect } from "react";
import { showSections, showTopicButtons } from "../utils/animations";

import arrow from "../images/chevron-up-black.svg";
import people from "../images/people.png";
import bannerImage from "../images/partner.jpeg";

const LargeBanner = ({ topics }) => {
  // Add scroll event listeners (move to index.js)
  useEffect(() => {
    typeof window !== "undefined" &&
      window.document.addEventListener("scroll", showSections);
    window.document.addEventListener("scroll", showTopicButtons);
  });

  return (
    <>
      <section className="large-banner">
        <div className="large-banner__inner">
          <div className="large-banner__text-wrapper">
            <div className="large-banner__text">
              <h1 className="large-banner__heading">
                Καλωσήρθες στη <br />{" "}
                <span className="site-title">Wolt Greece</span>
              </h1>
              <p>
                Εδώ θα βρείς απαντήσεις για όλες τις ερωτήσεις που μπορεί να
                έχεις σχετικά με τη συνεργασία σου μαζί μας.
              </p>
              <p>
                Μην ξεχνάς να ρίχνεις συχνά μια ματιά στη σελίδα, καθώς
                ενημερώνεται τακτικά.
              </p>
              <img
                src={people}
                alt="wolt people"
                data-nofocus
                className="large-banner__people"
              />
            </div>
          </div>

          <div className="large-banner__image-div">
            <div className="image-wrapper">
              <img
                className="banner-image"
                src={bannerImage}
                alt="wolt partner"
                data-nofocus
              />
            </div>
          </div>
        </div>
      </section>
      <section className="large-topics">
        <div>
          <h2>Διάλεξε κατηγορία..</h2>
          <ul className="large-topics-grid">
            {topics.map((topic, i) => (
              <li key={i}>
                <Link
                  to={`#${topic.node.title.toLowerCase().replace(/\s/g, "-")}`}
                >
                  <div>{topic.node.emoji}</div>
                  {topic.node.title}
                </Link>
              </li>
            ))}
          </ul>
          <h2>..ή συνέχισε παρακάτω.</h2>
          <Link to="#γενικά">
            <img src={arrow} className="scroll-arrow" data-nofocus />
          </Link>
        </div>
      </section>
      <section className="deco"></section>
    </>
  );
};

export default LargeBanner;
