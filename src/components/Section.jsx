import React from "react";
import CompanionImg from "./CompanionImg";
import Paragraph from "./Paragraph";

function Section(props) {
  return (
    <div class="container">
      <h2>{props.title}</h2>

        {props.contentType === "paragraph" && (
          <div class="row">
            <Paragraph data={props.contentData} />
            <CompanionImg url={props.companionImg} />
          </div>
        )}
        
    </div>
  );
}

export default Section;
