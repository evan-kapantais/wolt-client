import React from "react";
import { Link } from "gatsby";

const Aside = ({ topics }) => {
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
