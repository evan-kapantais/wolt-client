import React, { useEffect, lazy } from "react";
import { showSections } from "../utils/animations";
const Topic = lazy(() => import("../components/Topic"));

const FAQSection = ({ topics }) => {
  // Add scroll event listeners
  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("scroll", showSections);

    return () => {
      window.removeEventListener("scroll", showSections);
    };
  }, []);

  return (
    <section id="topics" className="topics-section">
      <div id="center-container">
        {topics.map((topic, i) => (
          <Topic key={i} topic={topic} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
