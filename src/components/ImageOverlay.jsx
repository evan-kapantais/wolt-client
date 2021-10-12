import React, { useEffect } from "react";

const ImageOverlay = ({ source, setSource }) => {
  // Show overlay
  useEffect(() => {
    const overlay = document.querySelector("#image-overlay");
    overlay.className = "image-overlay--shown";
  }, []);

  // Hide overlay
  const close = e => {
    const overlay = e.currentTarget;

    if (e.target !== overlay) {
      return;
    }

    setSource(null);
  };

  return (
    <div id="image-overlay" onClick={close} onKeyUp={() => {}}>
      <img src={source} alt="overlay" />
    </div>
  );
};

export default ImageOverlay;
