import React from "react";

function Paragraph(props) {
  return (
    <div className="col-sm">
      <p>{props.data}</p>
    </div>
  );
}

export default Paragraph;
