import React, { useEffect } from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { scrollBanner } from "../utils/animations";

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

  // Add scroll event listener
  useEffect(() => {
    typeof window !== "undefined" &&
      window.innerWidth > 560 &&
      window.addEventListener("scroll", scrollBanner);

    return () => {
      window.removeEventListener("scroll", scrollBanner);
    };
  }, []);

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
        <Link
          to={"#news" || "#select-topic"}
          className="scroll-link scroll-link__banner"
        >
          <p>{country.symbol === "Gr" ? "Ξεκίνα Εδώ" : "Start Here"}</p>
          <StaticImage
            src="../images/scroll-arrow.svg"
            alt="scroll arrow"
            className="scroll-arrow__banner"
            data-nofocus
          />
        </Link>
      </div>
    </section>
  );
};

export default BannerSection;
