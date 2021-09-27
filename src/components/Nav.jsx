import React from "react";
import { Link } from "gatsby";

const Nav = ({ topics }) => {
  return (
    <nav>
      <h3 id="nav-title">Ενότητες</h3>
      <ul className="nav-list">
        {topics.map(({ node }) => (
          <li key={node.strapiId} className="nav-list-item">
            <Link
              to={`#${node.title.toLowerCase().replaceAll(" ", "-")}`}
              className="nav-link"
            >
              {node.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
