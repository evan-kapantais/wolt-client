import React, { useEffect } from "react";
import { Link } from "gatsby";

const Menu = ({ topics, isMenuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    const menu = document.querySelector(".menu");

    isMenuOpen
      ? (menu.style.transform = "translateY(0px)")
      : (menu.style.transform = "translateY(calc(-100% - 3.7rem))");
  }, [isMenuOpen]);

  const getTopicKey = topic =>
    topic.node.title.toLowerCase().replaceAll(" ", "-");

  return (
    <div className="menu">
      <ul className="menu-list">
        {topics.map(topic => (
          <li key={getTopicKey(topic)}>
            <Link
              className="menu-link"
              to={`#${getTopicKey(topic)}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {topic.node.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
