// Core imports
import React, { useState, useEffect, lazy, Suspense } from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

// Top-level component imports
import Layout from "../components/layout";
import Seo from "../components/seo";

// Component imports
import BannerSection from "../components/BannerSection";
import Loading from "../components/Loading";
import Menu from "../components/Menu";
import BackToTop from "../components/BackToTop";
import ImageOverlay from "../components/ImageOverlay";

// Animation inports
import {
  animateBanner,
  handleScroll,
  stickHeader,
  animateMenu,
  animateHeader,
  showBackToTop,
} from "../utils/animations";

// Dynamic imports
const Topic = lazy(() => import("../components/Topic"));
const Aside = lazy(() => import("../components/Aside"));
const SelectTopicSection = lazy(() =>
  import("../components/SelectTopicSection")
);
const DecoSection = lazy(() => import("../components/DecoSection"));
const NewsSection = lazy(() => import("../components/NewsSection"));

const IndexPage = ({ data }) => {
  // State
  const [isLoading, setIsLoading] = useState(true);
  const [imageSource, setImageSource] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [topics, setTopics] = useState([]);

  // Sourced content
  const topicsOrder = data.strapiMtTopicsOrder.order.split("\n");
  const newsItems = data.allStrapiMtNewsItem.edges;
  const decoImage = getImage(data.strapiDecorativeImage.image.localFile);

  // Order topics on load
  useEffect(() => {
    const topics = data.allStrapiMtTopic.edges;
    const orderedTopics = [];

    topicsOrder.forEach(title => {
      const found = topics.find(topic => topic.node.title === title);

      if (found) {
        orderedTopics.push(found);
      }
    });

    setTopics([...orderedTopics]);
    setIsLoading(false);
  }, []);

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
  }, [isMenuOpen, isLoading]);

  // Remove empty elements after loading has finished
  useEffect(() => {
    if (!isLoading) {
      const newsItemElements = document.querySelectorAll(".news-item *");
      const sectionBreaks = document.querySelectorAll(".section br");

      newsItemElements.forEach(element => {
        if (element.innerHTML === "&nbsp;") {
          element.remove();
        }
      });

      sectionBreaks.forEach(br => {
        br.remove();
      });
    }
  }, [isLoading]);

  // Animate banner on load
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        animateBanner();
      });
    }
  }, [isLoading]);

  return (
    <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
      <Seo title=" Malta FAQ" />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <BannerSection
            data={data}
            country={{ symbol: "Mt", name: "Malta" }}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <NewsSection newsItems={newsItems} />
            <SelectTopicSection topics={topics} />
            <DecoSection decoImage={decoImage} />
            <section id="main-content">
              <Aside topics={topics} />
              <section id="topics" className="topics-section">
                <div id="center-container">
                  {topics.map((topic, i) => (
                    <Topic key={i} topic={topic} />
                  ))}
                </div>
              </section>
              <div></div>
            </section>
          </Suspense>
          {imageSource && (
            <ImageOverlay source={imageSource} setSource={setImageSource} />
          )}
          <Menu
            topics={topics}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </>
      )}
    </Layout>
  );
};

export const data = graphql`
  query {
    allStrapiMtTopic(sort: { fields: strapiId, order: ASC }) {
      edges {
        node {
          title
          emoji
          section {
            content
            title
          }
        }
      }
    }
    strapiMtTopicsOrder {
      order
    }
    strapiMtBannerText {
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
    allStrapiMtNewsItem {
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
    strapiMtVersion {
      date(formatString: "MMMM, YYYY")
    }
  }
`;

export default IndexPage;
