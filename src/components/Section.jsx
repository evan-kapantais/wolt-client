import React from "react";
import { toggleSection, hoverSection, leaveSection } from "../utils/animations";

import dashVer from "../images/dash-vertical.svg";
import dashHor from "../images/dash-horizontal.svg";

const Section = ({ section }) => {
  return (
    <div className="section">
      <h2
        className="section-title"
        onClick={toggleSection}
        onMouseEnter={hoverSection}
        onMouseLeave={leaveSection}
      >
        <div className="section-title__icon">
          <img src={dashVer} alt="sign dash" data-nofocus />
          <img src={dashHor} alt="sign dash" data-nofocus />
        </div>
        {section.title}
      </h2>
      <div
        className="section-content"
        dangerouslySetInnerHTML={{ __html: section.content }}
      />
    </div>
  );
};

export default Section;
