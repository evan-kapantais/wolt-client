import React from "react";
import { Link } from "gatsby";
import icons from "../utils/icons";

const Social = () => {
  return (
    <div className="social-icons">
      <Link to="https://www.facebook.com/WoltGreece/">
        <img className="social-icon" src={icons.facebook} alt="facebok icon" />
      </Link>
      <Link to="https://www.instagram.com/wolt.greece/">
        <img
          className="social-icon"
          src={icons.instagram}
          alt="instagram icon"
        />
      </Link>
      <Link to="https://twitter.com/GreeceWolt">
        <img className="social-icon" src={icons.twitter} alt="twitter icon" />
      </Link>
      <Link to="https://www.linkedin.com/company/wolt-oy/">
        <img className="social-icon" src={icons.linkedin} alt="twitter icon" />
      </Link>
      <Link to="https://wolt.com/el/">
        <img className="social-icon" src={icons.website} alt="twitter icon" />
      </Link>
    </div>
  );
};

export default Social;
