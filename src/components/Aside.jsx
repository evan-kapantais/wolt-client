import React, { useEffect } from "react";
import { Link } from "gatsby";
import { showAside } from "../utils/animations";

const Aside = ({ topics }) => {
  // Add scroll event listeners
  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("scroll", showAside);

    return () => {
      window.removeEventListener("scroll", showAside);
    };
  }, []);

  const getLink = topic =>
    `#${topic.node.title.toLowerCase().replace(/\s/g, "-")}`;

  return (
    <aside>
      <ul>
        {topics.map((topic, i) => (
          <li key={i} className="aside-list-item">
            <Link to={getLink(topic)} className="topic-text-link">
              <span>{topic.node.emoji}</span>
              {topic.node.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
