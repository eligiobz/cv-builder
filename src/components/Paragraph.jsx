import React from "react";

function Paragraph(props){
    return (
        <div class="col-sm">
        <p>
          {props.data}
        </p>
      </div>
    );
}

export default Paragraph;