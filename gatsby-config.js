require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Wolt`,
    description: `An extensive FAQ page for Wolt's Southern Europe's partners.`,
    author: `@evan-kapantais`,
    siteUrl: `https://wolt-client.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [370, 560, 1200],
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wolt-client`,
        short_name: `wolt`,
        start_url: `/`,
        background_color: `#00c2e8`,
        theme_color: `#00c2e8`,
        display: `minimal-ui`,
        icon: `src/images/wolt-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL:
          process.env.NODE_ENV === `development`
            ? `http://localhost:1337`
            : `http://wolt-server.herokuapp.com`,
        collectionTypes: [
          "section",
          "news-item",
          "cy-topic",
          "cy-news-item",
          "mt-topic",
          "mt-news-item",
          // "test-items",
        ],
        singleTypes: [
          "version",
          "banner-text",
          "banner-image",
          "decorative-image",
          "topics-order",
          "cy-topics-order",
          "cy-version",
          "cy-banner-text",
          "mt-topics-order",
          "mt-version",
          "mt-banner-text",
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
