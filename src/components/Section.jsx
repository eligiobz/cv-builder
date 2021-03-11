import React from "react";
import AccordionList from "./AccordionSkills/AccordionList";
import Carousel from "./Carousel/Carousel";
import CodeComment from "./CompanionItems/CodeComment";
import CompanionImg from "./CompanionItems/CompanionImg";
import Paragraph from "./Paragraph";

function Section(props) {
  return (
    <div className="container">
      <h2>{props.title}</h2>

      {props.contentType === "paragraph" && (
        <div className="row">
          <Paragraph contentData={props.contentData} />
          {props.companionImg && <CompanionImg url={props.companionImg} />}
          <hr />
        </div>
      )}

      {props.contentType === "list" && (
        <div className="row">
          <AccordionList size="small" contentData={props.contentData} />
          <CodeComment
            position="side"
            quote="La habilidad técnica es el dominio de la complejidad, mientras que la creatividad es el dominio de la simplicidad."
            author="Christopher Zeeman"
          />
          <hr />
        </div>
      )}

      {props.contentType === "carousel" && (
        <div className="row">
          <Carousel 
          contentData={props.contentData}/>
          <CodeComment
            quote=" Un gran logro no debería ser el final del camino, solo el punto de partida para el próximo salto hacia adelante."
            author="Harvey Mackay"
          />
          <hr />
        </div>
      )}
    </div>
  );
}

export default Section;
