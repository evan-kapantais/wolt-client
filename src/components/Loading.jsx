import React, { useEffect } from "react";

const Loading = () => {
  // Add animation delay to dots
  useEffect(() => {
    const dots = document.querySelectorAll(".loader-dot");

    for (let index = 0; index < dots.length; index++) {
      dots[index].style.animationDelay = `${index * 70}ms`;
    }
  }, []);

  return (
    <section className="loading">
      <div className="loader-wrapper">
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
      </div>
    </section>
  );
};

export default Loading;
