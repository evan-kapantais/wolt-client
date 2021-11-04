import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

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
      <StaticImage
        aria-hidden="true"
        src="../images/people.png"
        alt="decoration phone"
        className="menu-deco"
      />
      <footer className="menu-footer">
        <p>© Wolt, {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Menu;
