import React from "react";
import { Link } from "gatsby";

const Menu = ({ topics, setIsMenuOpen }) => {
  const getLink = topic =>
    `#${topic.node.title.toLowerCase().replace(/\s/g, "-")}`;

  return (
    <div className="menu">
      <ul className="menu-list">
        {topics.map((topic, i) => (
          <li key={i} className="menu-list__item">
            <Link
              className="menu-link"
              to={getLink(topic)}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="menu-link__emoji">{topic.node.emoji}</span>
              {topic.node.title}
            </Link>
          </li>
        ))}
      </ul>
      <footer className="menu-footer">
        <p>© Wolt, {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Menu;
