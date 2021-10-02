import React, { useEffect } from "react";
import { Link } from "gatsby";
import { animateMenu } from "../utils/animations";

import people from "../images/people.png";

const Menu = ({ topics, isMenuOpen, setIsMenuOpen }) => {
  // Animate the menu in / out
  useEffect(() => {
    animateMenu(isMenuOpen);
  }, [isMenuOpen]);

  const getTopicKey = topic => topic.node.title.toLowerCase();

  return (
    <div className="menu">
      <ul className="menu-list">
        {topics.map(topic => (
          <li key={getTopicKey(topic)} className="menu-list__item">
            <Link
              className="menu-link"
              to={`#${getTopicKey(topic)}`}
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
