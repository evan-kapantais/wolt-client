import React from "react";
// import Subsection from "./Subsection";
import dashVer from "../images/dash-vertical.svg";
import dashHor from "../images/dash-horizontal.svg";

const Section = ({ section }) => {
  // const hasSubsections = section.subsection.length > 0;
  const hasImmediateContent = section.content;

  const resetAllIcons = () => {
    const allSectionIcons = document.querySelectorAll(".section-title__icon");

    allSectionIcons.forEach(si => {
      const dashHor = si.querySelectorAll("img")[1];

      si.classList.remove("section-title__icon--active");
      dashHor.style.transform = "scale(1)";
    });
  };

  // Collapse all other expanded sections
  const collapseAll = () => {
    const allSectionTitles = document.querySelectorAll(".section-title");
    const allSectionContent = document.querySelectorAll(".section-content");

    allSectionContent.forEach(sc => {
      if (sc.style.maxHeight) {
        sc.style.maxHeight = null;
        sc.style.padding = "0 1rem";
      }
    });

    allSectionTitles.forEach(st =>
      st.classList.remove("section-title--active")
    );

    resetAllIcons();
  };

  // Expand / collapse section
  const toggleSection = e => {
    const title = e.currentTarget;
    const content = title.nextElementSibling;
    const icon = title.querySelector(".section-title__icon");
    const dashHor = icon.querySelectorAll("img")[1];

    // Collapse section
    if (content.style.maxHeight) {
      icon.classList.remove("section-title__icon--active");
      icon.classList.add("section-title__icon--hover");
      dashHor.style.transform = "scale(1)";
      title.classList.remove("section-title--active");
      content.style.maxHeight = null;
      content.style.padding = "0 1rem";
      // Expand section
    } else {
      collapseAll();
      icon.classList.add("section-title__icon--active");
      icon.classList.remove("section-title__icon--hover");
      dashHor.style.transform = "scale(0)";
      title.classList.add("section-title--active");
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.padding = "1rem";
    }
  };

  const hoverSection = e => {
    const icon = e.currentTarget.querySelector(".section-title__icon");
    icon.classList.add("section-title__icon--hover");
  };

  const leaveSection = e => {
    const icon = e.currentTarget.querySelector(".section-title__icon");
    icon.classList.remove("section-title__icon--hover");
  };

  return (
    <div className={hasImmediateContent ? "section" : ""}>
      <h2
        className={hasImmediateContent ? "section-title" : ""}
        onClick={hasImmediateContent && toggleSection}
        onMouseEnter={hoverSection}
        onMouseLeave={leaveSection}
      >
        <div className="section-title__icon">
          <img src={dashVer} alt="sign dash" data-nofocus />
          <img src={dashHor} alt="sign dash" data-nofocus />
        </div>
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
