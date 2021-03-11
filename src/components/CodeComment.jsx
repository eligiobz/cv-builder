import React from "react";

function CodeComment(props) {
  return (
    <div className={(props.position==="side") && "col-6 me-auto"}>
      <h4 className="codeComment">
        /***
        <br />
        {props.quote}
        <br />
        {props.author}
        <br />
        ***/
      </h4>
    </div>
  );
}

export default CodeComment;
