import React, { useEffect } from "react";
import { Link } from "gatsby";
import { animateMenu } from "../utils/animations";

import people from "../images/people.png";

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
              <span>{topic.node.emoji} </span>
              {topic.node.title}
            </Link>
          </li>
        ))}
      </ul>
      <img className="menu-deco" src={people} alt="wolt people" data-nofocus />
      <footer className="menu-footer">
        <p>© Wolt, {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Menu;
