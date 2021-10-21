import React, { useEffect } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { showDeco, scrollDeco } from "../utils/animations";

const DecoSection = ({ decoImage }) => {
  // Add scroll event listeners
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", showDeco);
      window.addEventListener("scroll", scrollDeco);
    }

    return () => {
      window.removeEventListener("scroll", showDeco);
      window.removeEventListener("scroll", scrollDeco);
    };
  }, []);

  return (
    <section className="deco">
      <GatsbyImage
        image={decoImage}
        loading="lazy"
        alt="wolt partner"
        className="deco-image"
        data-nofocus
      />
    </section>
  );
};

export default DecoSection;
