import React, { useEffect } from "react";

const ImageOverlay = ({ source, setSource }) => {
  useEffect(() => {
    const overlay = document.querySelector("#image-overlay");
    overlay.className = "image-overlay--shown";
  }, []);

  const close = e => {
    const overlay = e.currentTarget;

    if (e.target !== overlay) {
      return;
    }

    setSource(null);
  };

  return (
    <div id="image-overlay" onClick={close}>
      <img src={source} alt="focused image" />
    </div>
  );
};

export default ImageOverlay;
