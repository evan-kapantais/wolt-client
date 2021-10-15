// Core imports
import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

// Top-level component imports
import Layout from "../components/layout";
import Seo from "../components/seo";

// Component imports
import Topic from "../components/Topic";
import Menu from "../components/Menu";
import ImageOverlay from "../components/ImageOverlay";
import Aside from "../components/Aside";
import SelectTopicSection from "../components/SelectTopicSection";
import DecoSection from "../components/DecoSection";
import BackToTop from "../components/BackToTop";
import NewsSection from "../components/NewsSection";
import BannerSection from "../components/BannerSection";

// Animation inports
import {
  animateBanner,
  handleScroll,
  stickHeader,
  animateMenu,
  animateHeader,
  showBackToTop,
} from "../utils/animations";

const IndexPage = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSource, setImageSource] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const topics = data.allStrapiSection.edges;
  const topicsOrder = data.strapiTopicsOrder.order.split("\n");
  const newsItems = data.allStrapiNewsItem.edges;

  const decoImage = getImage(data.strapiDecorativeImage.image.localFile);

  // Init event listeners after loading
  useEffect(() => {
    if (typeof window !== "undefined" && !isLoading) {
      window.addEventListener("scroll", showBackToTop);
      window.addEventListener("scroll", stickHeader);
      window.addEventListener("scroll", handleScroll);
    }
  }, [isLoading]);

  // Focus the images after loading has finished
  useEffect(() => {
    if (!isLoading) {
      const images = document.querySelectorAll("img");

      images.forEach(image => {
        if (!image.dataset.nofocus) {
          image.addEventListener("click", e =>
            setImageSource(e.currentTarget.src)
          );
        }
      });
    }
  }, [isLoading]);

  // Cotrol document overflow && menu
  useEffect(() => {
    if (!isLoading) {
      const html = window.document.querySelector("html");

      isMenuOpen
        ? (html.style.overflowY = "hidden")
        : (html.style.overflowY = "scroll");

      animateHeader(isMenuOpen);
      animateMenu(isMenuOpen);
    }
  }, [isMenuOpen]);

  // Animate banner on load
  useEffect(() => {
    !isLoading && animateBanner();
  }, [isLoading]);

  const returnOrderedTopics = () => {
    const orderedTopics = [];

    console.log(`The desired order is ${topicsOrder}`);

    topicsOrder.forEach(title => {
      const found = topics.find(topic => topic.node.title === title);

      if (found) {
        console.log(`Adding ${title} to array..`);
        orderedTopics.push(found);
      } else {
        console.log(`Failed to find ${title} in topics`);
      }
    });

    return orderedTopics;
  };

  // Testing
  useEffect(() => {
    returnOrderedTopics();
  }, []);

  return (
    <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
      <Seo title="FAQ" />
      <BannerSection data={data} />
      <NewsSection newsItems={newsItems} />
      <SelectTopicSection topics={topics} />
      <DecoSection decoImage={decoImage} />
      <section id="main-content">
        <Aside topics={topics} />
        <section id="topics" className="topics-section">
          {isLoading ? (
            <p>Loading content...</p>
          ) : (
            <div id="center-container">
              {returnOrderedTopics().map((topic, i) => (
                <Topic key={i} topic={topic} />
              ))}
            </div>
          )}
        </section>
      </section>
      {imageSource && (
        <ImageOverlay source={imageSource} setSource={setImageSource} />
      )}
      <Menu
        topics={topics}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <BackToTop />
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
    strapiTopicsOrder {
      order
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
