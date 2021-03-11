import React from "react";

function Paragraph(props) {
  return (
    <div className="col-sm">
      <p>{props.contentData}</p>
    </div>
  );
}

export default Paragraph;
