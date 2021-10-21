import React from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, StaticQuery, graphql } from "gatsby";

const BannerSection = ({ data, country }) => {
  const bannerImage = getImage(data.strapiBannerImage.image.localFile);

  const getVersion = () => {
    switch (country.symbol) {
      case "Cy":
        return data.strapiCyVersion.date;
      case "Mt":
        return data.strapiMtVersion.date;
      case "Gr":
      default:
        return data.strapiVersion.date;
    }
  };

  const getBannerText = () => {
    switch (country.symbol) {
      case "Cy":
        return data.strapiCyBannerText.text;
      case "Mt":
        return data.strapiMtBannerText.text;
      case "Gr":
      default:
        return data.strapiBannerText.text;
    }
  };

  return (
    <section className="large-banner">
      <div className="large-banner__inner">
        <div className="large-banner__text-wrapper">
          <div className="version">
            <span>Version</span>
            <span>{getVersion()}</span>
          </div>
          <div className="large-banner__text">
            <h1 className="large-banner__heading">
              {country.symbol === "Gr" ? "Καλωσήρθες στη" : "Welcome To"} <br />{" "}
              <span className="site-title">Wolt {country.name}</span>
            </h1>
            <div
              dangerouslySetInnerHTML={{
                __html: getBannerText(),
              }}
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
        <p>{country.symbol === "Gr" ? "Ξεκίνα Εδώ" : "Start Here"}</p>
        <StaticImage
          src="../images/chevron-up-black.svg"
          alt="back to top icon"
          className="scroll-arrow"
          data-nofocus
        />
      </Link>
    </section>
  );
};

export default BannerSection;
