import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Topic from "../components/Topic";
import Menu from "../components/Menu";
import ImageOverlay from "../components/ImageOverlay";
import TopicButton from "../components/TopicButton";

const IndexPage = ({ data }) => {
  const topics = data.allStrapiSection.edges;

  const [imageSource, setImageSource] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Focus the images after loading has finished
  React.useEffect(() => {
    const images = document.querySelectorAll("img");

    images.forEach(image => {
      if (!image.dataset.nofocus) {
        image.addEventListener("click", e =>
          setImageSource(e.currentTarget.src)
        );
      }
    });
  });

  // Cotrol document overflow based on menu state
  React.useEffect(() => {
    const html = window.document.querySelector("html");

    isMenuOpen
      ? (html.style.overflowY = "hidden")
      : (html.style.overflowY = "scroll");
  }, [isMenuOpen]);

  return (
    <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
      <Seo title="Home" />
      <section className="top-banner">
        <div className="banner__overlay" />
        <div id="index-banner__container">
          <p id="index-sub">Διάλεξε Κατηγορία</p>
          <div id="topics-grid">
            {topics.map((topic, i) => (
              <TopicButton key={i} topic={topic} />
            ))}
          </div>
        </div>
      </section>
      <main id="main-content">
        <section>
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
