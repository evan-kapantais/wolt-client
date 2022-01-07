import React, { useEffect } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { scrollBanner } from "../utils/animations";

const BannerSection = ({ data, country }) => {
  const bannerImage = getImage(data.strapiBannerImage.image.localFile);

  const getVersion = () => {
    switch (country.symbol) {
      case "Cy":
        return {
          date: data.strapiCyVersion.date,
          number: data.strapiCyVersion.number,
        };
      case "Mt":
        return {
          date: data.strapiMtVersion.date,
          number: data.strapiMtVersion.number,
        };
      case "Gr":
      default:
        return {
          date: data.strapiVersion.date,
          number: data.strapiVersion.number,
        };
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
    <section className="banner">
      <div className="banner__inner">
        <div className="banner__text-wrapper">
          <div className="banner__text-container">
            <div className="version">
              <div>
                <p>
                  <b>Update Date</b>
                </p>
                <p>{getVersion().date}</p>
              </div>
              <div>
                <p>
                  <b>Version</b>
                </p>
                <p>{getVersion().number}</p>
              </div>
            </div>
            <div className="banner__text">
              <div className="banner__heading-wrapper">
                <h1 className="site-title">Wolt {country.name}</h1>
                <p>Partner FAQ</p>
              </div>
              <div
                className="banner__paragraphs"
                dangerouslySetInnerHTML={{
                  __html: getBannerText(),
                }}
              />
            </div>
            <Link
              to={"#news" || "#select-topic"}
              className="scroll-link scroll-link__banner"
            >
              <p>{country.symbol === "Gr" ? "Ξεκίνα Εδώ" : "Start Here"}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="32"
                viewBox="0 0 200 32"
                className="scroll-arrow__banner"
              >
                <defs>
                  <clipPath id="clip-iPhone_XR_XS_Max_11_1">
                    <rect width="200" height="32" />
                  </clipPath>
                </defs>
                <g
                  id="iPhone_XR_XS_Max_11_1"
                  data-name="iPhone XR, XS Max, 11 – 1"
                  clipPath="url(#clip-iPhone_XR_XS_Max_11_1)"
                >
                  <line
                    className="arrow-line"
                    id="Line_7"
                    data-name="Line 7"
                    x2="189"
                    transform="translate(1 1)"
                    fill="none"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                  <line
                    className="arrow-line"
                    id="Line_8"
                    data-name="Line 8"
                    y1="30"
                    transform="translate(190 1)"
                    fill="none"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                  <line
                    className="arrow-line"
                    id="Line_9"
                    data-name="Line 9"
                    y1="10"
                    x2="9"
                    transform="translate(190 21)"
                    fill="none"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                </g>
              </svg>
            </Link>
          </div>
        </div>
        <div className="banner__image-div" aria-hidden="true">
          <div className="image-wrapper">
            <GatsbyImage
              image={bannerImage}
              alt="wolt partner"
              className="banner-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
