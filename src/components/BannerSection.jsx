import React from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const BannerSection = ({ data }) => {
  const bannerImage = getImage(data.strapiBannerImage.image.localFile);

  return (
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
              dangerouslySetInnerHTML={{
                __html: data.strapiBannerText.text,
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
        <p>Ξεκίνα Εδώ</p>
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
