import React from "react";
import AccordionList from "./AccordionList";
import CodeComment from "./CodeComment";
import CompanionImg from "./CompanionImg";
import Paragraph from "./Paragraph";

function Section(props) {
  return (
    <div className="container">
      <h2>{props.title}</h2>

      {props.contentType === "paragraph" && (
        <div className="row">
          <Paragraph data={props.contentData} />
          <CompanionImg url={props.companionImg} />
        </div>
      )}

      {props.contentType === "list" && (
        <div className="row">
          <AccordionList size="small" />
          <CodeComment
            position="side"
            quote="La habilidad técnica es el dominio de la complejidad, mientras que la creatividad es el dominio de la simplicidad."
            author="Christopher Zeeman"
          />
        </div>
      )}
    </div>
  );
}

export default Section;
