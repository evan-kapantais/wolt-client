import React from "react";
import Subsection from "./Subsection";

const Section = ({ section }) => {
  // const hasSubsections = section.subsection.length > 0;
  const hasImmediateContent = section.content;

  const toggleSection = e => {
    const title = e.currentTarget;
    const content = title.nextElementSibling;

    // Collapse section
    if (content.style.maxHeight) {
      title.classList.remove("section-title--active");
      content.style.maxHeight = null;
      content.style.padding = "0 1rem";
      // Expand section
    } else {
      title.classList.remove("section-title--active");
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.padding = "1rem";
    }
  };

  return (
    <div className={hasImmediateContent ? "section" : ""}>
      <h2
        className={hasImmediateContent ? "section-title" : ""}
        onClick={hasImmediateContent && toggleSection}
      >
        {section.title}
      </h2>
      {hasImmediateContent && (
        <div
          className="section-content"
          dangerouslySetInnerHTML={{ __html: section.content }}
        />
      )}
      {/* {hasSubsections &&
        section.subsection.map(subsection => (
          <Subsection subsection={subsection} key={subsection.title} />
        ))} */}
    </div>
  );
};

export default Section;
