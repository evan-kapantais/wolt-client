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
import ImageOverlay from "../components/ImageOverlay";

// Animation inports
import { animateBanner } from "../utils/animations";
import { setDocumentOverflow, initListeners } from "../utils/helpers";

// Dynamic imports
const Aside = lazy(() => import("../components/Aside"));
const SelectTopicSection = lazy(() =>
  import("../components/SelectTopicSection")
);
const DecoSection = lazy(() => import("../components/DecoSection"));
const NewsSection = lazy(() => import("../components/NewsSection"));
const FAQSection = lazy(() => import("../components/FAQSection"));

const IndexPage = ({ data }) => {
  // State
  const [isLoading, setIsLoading] = useState(true);
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
    initListeners(isLoading);
  }, [isLoading]);

  // Cotrol document overflow && menu
  useEffect(() => {
    setDocumentOverflow(isLoading, isMenuOpen);
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
              <FAQSection topics={topics} />
              <div></div>
            </section>
          </Suspense>
          <ImageOverlay />
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
