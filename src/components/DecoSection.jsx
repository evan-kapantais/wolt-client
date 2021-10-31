import React, { useEffect } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { showDeco, scrollDeco } from "../utils/animations";

const DecoSection = ({ decoImage }) => {
  // Add scroll event listeners
  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("scroll", showDeco);

    return () => {
      window.removeEventListener("scroll", showDeco);
    };
  }, []);

  return (
    <section className="deco">
      <GatsbyImage
        image={decoImage}
        loading="lazy"
        alt="wolt partner"
        className="deco-image"
      />
    </section>
  );
};

export default DecoSection;
