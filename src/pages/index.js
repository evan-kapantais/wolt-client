import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Topic from "../components/Topic";
import Nav from "../components/Nav";

const IndexPage = ({ data }) => {
  const topics = data.allStrapiSection.edges;

  return (
    <Layout>
      <Seo title="Home" />
      <section id="banner">
        <div id="banner__container">
          <h1>
            All of your questions - <br /> answered.
          </h1>
        </div>
      </section>
      <main id="main-content">
        <aside id="sidebar">
          <Nav topics={topics} />
        </aside>
        <section>
          <div id="center-container">
            {topics.map(topic => (
              <Topic key={topic.node.strapiId} topic={topic} />
            ))}
          </div>
        </section>
      </main>
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
            subsection {
              title
              content
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
