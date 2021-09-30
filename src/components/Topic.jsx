import React from "react";

import Section from "./Section";

const Topic = ({ topic }) => {
  const id = topic.node.title.toLowerCase().replace(/\s/g, "-");

  return (
    <section className="topic" id={id}>
      <h1 className="topic-title">
        <span>{topic.node.emoji} </span>
        {topic.node.title}
      </h1>
      {topic.node.section.map((section, i) => (
        <Section key={i} section={section} />
      ))}
    </section>
  );
};

export default Topic;
