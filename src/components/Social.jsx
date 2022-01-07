import React from "react";
import icons from "../utils/icons";
import links from "../utils/links";

const Social = () => {
  const country =
    (typeof window !== "undefined" &&
      window.location.pathname.replace(/\//gi, "")) ||
    "greece";

  return (
    <div className="social-icons">
      {links[country].facebook && (
        <a href={links[country].facebook} className="social-link">
          <img
            className="social-icon"
            src={icons.facebook}
            alt="facebok icon"
          />
        </a>
      )}
      {links[country].instagram && (
        <a href={links[country].instagram} className="social-link">
          <img
            className="social-icon"
            src={icons.instagram}
            alt="instagram icon"
          />
        </a>
      )}
      {links[country].twitter && (
        <a href={links[country].twitter} className="social-link">
          <img className="social-icon" src={icons.twitter} alt="twitter icon" />
        </a>
      )}
      {links[country].linkedin && (
        <a href={links[country].linkedin} className="social-link">
          <img
            className="social-icon"
            src={icons.linkedin}
            alt="linkedin icon"
          />
        </a>
      )}
      {links[country].site && (
        <a href={links[country].site} className="social-link">
          <img className="social-icon" src={icons.website} alt="website icon" />
        </a>
      )}
    </div>
  );
};

export default Social;
