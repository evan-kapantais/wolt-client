import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Topic from "../components/Topic";
import Menu from "../components/Menu";
import ImageOverlay from "../components/ImageOverlay";
import Aside from "../components/Aside";
import NewsItem from "../components/NewsItem";

import { showBackToTop } from "../utils/animations";
import {
  animateBanner,
  handleScroll,
  stickHeader,
  animateMenu,
  animateHeader,
} from "../utils/animations";

import arrow from "../images/chevron-up-black.svg";

const IndexPage = ({ data }) => {
  const topics = data.allStrapiSection.edges;
  const newsItems = data.allStrapiNewsItem.edges;

  const bannerImage = getImage(data.strapiBannerImage.image.localFile);
  const decoImage = getImage(data.strapiDecorativeImage.image.localFile);

  const [imageSource, setImageSource] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Init event listeners on load
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", showBackToTop);
      window.addEventListener("scroll", stickHeader);
      window.addEventListener("scroll", handleScroll);
    }
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

  // Cotrol document overflow && menu
  useEffect(() => {
    const html = window.document.querySelector("html");

    isMenuOpen
      ? (html.style.overflowY = "hidden")
      : (html.style.overflowY = "scroll");

    animateHeader(isMenuOpen);
    animateMenu(isMenuOpen);
  }, [isMenuOpen]);

  // Animate banner on load
  useEffect(() => {
    animateBanner();
  }, []);

  return (
    <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
      <Seo title="FAQ" />
      <section className="large-banner">
        <div className="large-banner__inner">
          <div className="large-banner__text-wrapper">
            <div className="version">
              <span>Latest Version</span>
              <span>{data.strapiVersion.date}</span>
            </div>
            <div className="large-banner__text">
              <h1 className="large-banner__heading">
                Καλωσήρθες στη <br />{" "}
                <span className="site-title">Wolt Greece</span>
              </h1>
              <div
                dangerouslySetInnerHTML={{ __html: data.strapiBannerText.text }}
              />
              <StaticImage
                src="../images/people.png"
                alt="wolt people"
                data-nofocus
                className="large-banner__people"
              />
            </div>
          </div>
          <div className="large-banner__image-div">
            <div className="image-wrapper">
              <GatsbyImage
                image={bannerImage}
                alt="wolt partner"
                className="banner-image"
                data-nofocus
              />
            </div>
          </div>
        </div>
        <Link to="#news" className="scroll-link scroll-link__banner">
          <p>Ξεκίνα Εδώ</p>
          <StaticImage
            src="../images/chevron-up-black.svg"
            alt="back to top icon"
            className="scroll-arrow"
            data-nofocus
          />
        </Link>
      </section>
      <section id="news">
        <StaticImage
          src="../images/phone.png"
          alt="phone"
          className="phone-deco"
          data-nofocus
        />
        <div className="news-container">
          <h1 className="news-title">Τα Νέα Μας</h1>
          {newsItems.length > 0 ? (
            newsItems.map((newsItem, i) => (
              <React.Fragment key={i}>
                <NewsItem newsItem={newsItem} />
                <hr />
              </React.Fragment>
            ))
          ) : (
            <p>
              Δεν υπάρχουν νέα αυτή τη στιγμή. Μπορείς να συνεχίσεις{" "}
              <Link to="#select-topic">παρακάτω</Link>.
            </p>
          )}
        </div>
      </section>
      <section id="select-topic" className="large-topics">
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
          <Link to="#γενικά" className="scroll-link">
            <img
              src={arrow}
              alt="back to top icon"
              className="scroll-arrow"
              data-nofocus
            />
          </Link>
        </div>
      </section>
      <section className="deco">
        <GatsbyImage
          image={decoImage}
          alt="wolt partner"
          className="deco-image"
          data-nofocus
        />
      </section>
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
        <StaticImage
          src="../images/chevron-up-black.svg"
          alt="back to top arrow"
          data-nofocus
        />
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
    strapiBannerText {
      text
    }
    strapiBannerImage {
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    allStrapiNewsItem {
      edges {
        node {
          title
          content
        }
      }
    }
    strapiDecorativeImage {
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    strapiVersion {
      date(formatString: "MMMM, YYYY")
    }
  }
`;

export default IndexPage;
