import React from "react";

function AccordionHeader(props) {
  return (
    <h2 className="accordion-header" id={"flush-heading" + props.name}>
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={"#flush-" + props.name}
        aria-expanded="false"
        aria-controls={"flush-" + props.name}
      >
        <i className="fas fa-project-diagram"></i>&nbsp;&nbsp;{props.title}
      </button>
    </h2>
  );
}

export default AccordionHeader;
