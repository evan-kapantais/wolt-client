import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Topic from "../components/Topic";
import Menu from "../components/Menu";
import ImageOverlay from "../components/ImageOverlay";
import Aside from "../components/Aside";

import arrowTop from "../images/chevron-up-black.svg";
import { showBackToTop } from "../utils/animations";
import { animateBanner, handleScroll } from "../utils/animations";

import arrow from "../images/chevron-up-black.svg";
import people from "../images/people.png";
import bannerImage from "../images/partner.jpeg";

const IndexPage = ({ data }) => {
  const topics = data.allStrapiSection.edges;

  const [imageSource, setImageSource] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("scroll", showBackToTop);
  }, []);

  // Focus the images after loading has finished
  useEffect(() => {
    const images = document.querySelectorAll("img");

    images.forEach(image => {
      if (!image.dataset.nofocus) {
        image.addEventListener("click", e =>
          setImageSource(e.currentTarget.src)
        );
      }
    });
  }, []);

  // Cotrol document overflow based on menu state
  useEffect(() => {
    const html = window.document.querySelector("html");

    isMenuOpen
      ? (html.style.overflowY = "hidden")
      : (html.style.overflowY = "scroll");
  }, [isMenuOpen]);

  // Add scroll event listeners
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.document.addEventListener("scroll", handleScroll);
    }
  }, []);

  // Animate banner on load
  useEffect(() => {
    animateBanner();
  }, []);

  return (
    <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
      <Seo title="Home" />
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
              <li key={i} className="topic-item">
                <Link
                  to={`#${topic.node.title.toLowerCase().replace(/\s/g, "-")}`}
                  className="topic-link"
                >
                  <div>{topic.node.emoji}</div>
                  {topic.node.title}
                </Link>
              </li>
            ))}
          </ul>
          <h2>..ή συνέχισε παρακάτω.</h2>
          <Link to="#γενικά">
            <img
              src={arrow}
              alt="back to top icon"
              className="scroll-arrow"
              data-nofocus
            />
          </Link>
        </div>
      </section>
      <section className="deco"></section>
      <main id="main-content">
        <Aside topics={topics} />
        <section className="topics-section">
          <div id="center-container">
            {topics.map((topic, i) => (
              <Topic key={i} topic={topic} />
            ))}
          </div>
        </section>
      </main>
      {imageSource && (
        <ImageOverlay source={imageSource} setSource={setImageSource} />
      )}
      <Menu
        topics={topics}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Link to="/" className="back-to-top">
        <span>Back To Top</span>
        <img src={arrowTop} alt="back to top arrow" data-nofocus />
      </Link>
    </Layout>
  );
};

export const data = graphql`
  query {
    allStrapiSection(sort: { fields: strapiId, order: ASC }) {
      edges {
        node {
          strapiId
          emoji
          title
          section {
            content
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
