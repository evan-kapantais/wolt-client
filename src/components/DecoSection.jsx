import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const DecoSection = ({ decoImage }) => {
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
