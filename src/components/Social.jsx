import React from "react";
import { Link } from "gatsby";
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
        <Link to={links[country].facebook} className="social-link">
          <img
            className="social-icon"
            src={icons.facebook}
            alt="facebok icon"
          />
        </Link>
      )}
      {links[country].instagram && (
        <Link to={links[country].instagram} className="social-link">
          <img
            className="social-icon"
            src={icons.instagram}
            alt="instagram icon"
          />
        </Link>
      )}
      {links[country].twitter && (
        <Link to={links[country].twitter} className="social-link">
          <img className="social-icon" src={icons.twitter} alt="twitter icon" />
        </Link>
      )}
      {links[country].linkedin && (
        <Link to={links[country].linkedin} className="social-link">
          <img
            className="social-icon"
            src={icons.linkedin}
            alt="linkedin icon"
          />
        </Link>
      )}
      {links[country].site && (
        <Link to={links[country].site} className="social-link">
          <img className="social-icon" src={icons.website} alt="website icon" />
        </Link>
      )}
    </div>
  );
};

export default Social;
