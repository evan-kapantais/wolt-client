import React from "react";

const Subsection = ({ subsection }) => {
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
    <div className="section">
      <h3 className="section-title" onClick={toggleSection}>
        {subsection.title}
      </h3>
      <div className="section-content">
        <div dangerouslySetInnerHTML={{ __html: subsection.content }} />
      </div>
    </div>
  );
};

export default Subsection;
