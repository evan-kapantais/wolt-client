import React from "react";

import Section from "./Section";

const Topic = ({ topic }) => {
  const key = topic.node.title.toLowerCase().replace(" ", "-");

  return (
    <section key={key} className="topic" id={key}>
      <h1 className="topic-title">{topic.node.title}</h1>
      {topic.node.section.map(section => (
        <Section key={section.title} section={section} />
      ))}
    </section>
  );
};

export default Topic;
