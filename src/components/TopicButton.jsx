import React from "react";
import { Link } from "gatsby";

const TopicButton = ({ topic }) => {
  const link = `#${topic.node.title.toLowerCase().replace(/\s/g, "-")}`;

  return (
    <Link to={link} className="button topic-button">
      <span>{topic.node.emoji} </span>
      {topic.node.title}
    </Link>
  );
};

export default TopicButton;
