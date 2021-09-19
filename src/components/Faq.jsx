import React from "react";

const Faq = ({ node }) => {
  const showAnswer = e => {
    const question = e.currentTarget;
    const answer = question.nextElementSibling;

    // Collapse the answer
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      answer.style.padding = "0 1rem";
      // Expand the answer
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.padding = "1rem";
    }
  };

  return (
    <div className="faq">
      <button className="question" onClick={showAnswer}>
        {node.question}
      </button>
      <div
        dangerouslySetInnerHTML={{ __html: node.answer }}
        className="answer"
      />
    </div>
  );
};

export default Faq;
