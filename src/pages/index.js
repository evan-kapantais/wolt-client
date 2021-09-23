import * as React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Topic from "../components/Topic";
import Nav from "../components/Nav";
import Menu from "../components/Menu";
import ImageOverlay from "../components/ImageOverlay";

import logo from "../images/wolt-logo.png";

// TODO: integrate subsections jic
// TODO: collapse answer when clicking a new one
// TODO: fix color palette

const IndexPage = ({ data }) => {
  const topics = data.allStrapiSection.edges;

  const [imageSource, setImageSource] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const focusImage = e => {
    setImageSource(e.currentTarget.src);
  };

  React.useEffect(() => {
    const images = document.querySelectorAll("img");

    images.forEach(image => {
      if (!image.dataset.nofocus) {
        image.addEventListener("click", focusImage);
      }
    });
  });

  React.useEffect(() => {
    const html = window.document.querySelector("html");

    isMenuOpen
      ? (html.style.overflow = "hidden")
      : (html.style.overflow = "scroll");
  }, [isMenuOpen]);

  const getTopicKey = topic =>
    topic.node.title.toLowerCase().replaceAll(" ", "-");

  return (
    <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
      <Seo title="Home" />
      <section className="top-banner">
        <div className="banner__overlay" />
        <div id="index-banner__container">
          <p id="index-sub">Διάλεξε Κατηγορία</p>
          <div id="topics-grid">
            {topics.map(topic => (
              <Link
                key={getTopicKey(topic)}
                to={`#${getTopicKey(topic)}`}
                className="button"
              >
                {topic.node.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <main id="main-content">
        <section>
          <div id="center-container">
            {topics.map(topic => (
              <Topic key={topic.node.strapiId} topic={topic} />
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
    </Layout>
  );
};

export const data = graphql`
  query {
    allStrapiSection(sort: { fields: strapiId, order: ASC }) {
      edges {
        node {
          strapiId
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
