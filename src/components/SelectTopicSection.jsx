import React, { useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { showTopicButtons } from "../utils/animations";

const SelectTopicSection = ({ topics }) => {
  const isGreekPage =
    typeof window !== "undefined" && window.location.pathname === "/";

  // Add scroll event listener
  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("scroll", showTopicButtons);

    return () => {
      window.removeEventListener("scroll", showTopicButtons);
    };
  }, []);

  return (
    <section id="select-topic" className="large-topics">
      <div>
        <h2>{isGreekPage ? "Διάλεξε κατηγορία.." : "Select a category.."}</h2>
        <ul className="large-topics-grid">
          {topics.map((topic, i) => (
            <li key={i} className="topic-item">
              <Link
                to={`#${topic.node.title.toLowerCase().replace(/\s/g, "-")}`}
                className="topic-link"
              >
                <div>{topic.node.emoji}</div>
                {topic.node.title}
              </Link>
            </li>
          ))}
        </ul>
        <h2>
          {isGreekPage ? "..ή συνέχισε παρακάτω." : "..or keep scrolling."}
        </h2>
        <Link to="#topics" className="scroll-link">
          <StaticImage
            src="../images/chevron-up-black.svg"
            alt="back to top icon"
            className="scroll-arrow"
          />
        </Link>
      </div>
    </section>
  );
};

export default SelectTopicSection;
