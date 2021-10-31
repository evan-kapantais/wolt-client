import React, { useEffect, useState } from "react";

import zoomIn from "../images/zoom-in.svg";
import zoomOut from "../images/zoom-out.svg";

const ImageOverlay = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  // Zoom figure in / out
  useEffect(() => {
    const figure = document.querySelector(".image-overlay figure");

    if (!figure) {
      return;
    }

    figure.style.transform = `scale(${zoomLevel})`;
  }, [zoomLevel]);

  // Hide overlay
  const close = e => {
    const overlay = e.currentTarget;

    if (e.target !== overlay && e.target.type !== "button") {
      return;
    }

    overlay.removeChild(overlay.lastChild);
    overlay.classList.remove("active");
  };

  return (
    <div className="image-overlay" onClick={close} onKeyUp={() => {}}>
      <button type="button" className="image-overlay__close">
        ✕
      </button>
      <div className="zoom-wrapper">
        <button
          type="button"
          className="zoom-button"
          onClick={() => setZoomLevel(zoomLevel - 0.1)}
        >
          <img src={zoomOut} alt="zoom out" />
        </button>
        <button
          type="button"
          className="zoom-button"
          onClick={() => setZoomLevel(zoomLevel + 0.1)}
        >
          <img src={zoomIn} alt="zoom in" />
        </button>
      </div>
    </div>
  );
};

export default ImageOverlay;
