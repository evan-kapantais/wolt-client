import React from "react";
import { Link } from "gatsby";
import icons from "../utils/icons";

const Social = () => {
  return (
    <div className="social-icons">
      <Link to="https://www.facebook.com/WoltGreece/" className="social-link">
        <img
          data-nofocus
          className="social-icon"
          src={icons.facebook}
          alt="facebok icon"
        />
      </Link>
      <Link to="https://www.instagram.com/wolt.greece/" className="social-link">
        <img
          data-nofocus
          className="social-icon"
          src={icons.instagram}
          alt="instagram icon"
        />
      </Link>
      <Link to="https://twitter.com/GreeceWolt" className="social-link">
        <img
          data-nofocus
          className="social-icon"
          src={icons.twitter}
          alt="twitter icon"
        />
      </Link>
      <Link
        to="https://www.linkedin.com/company/wolt-oy/"
        className="social-link"
      >
        <img
          data-nofocus
          className="social-icon"
          src={icons.linkedin}
          alt="twitter icon"
        />
      </Link>
      <Link to="https://wolt.com/el/" className="social-link">
        <img
          data-nofocus
          className="social-icon"
          src={icons.website}
          alt="twitter icon"
        />
      </Link>
    </div>
  );
};

export default Social;
