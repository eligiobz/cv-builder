import React from "react";
import { v4 as uuidv4 } from "uuid";
import AccordionHeader from "./AccordionHeader";
import SkillHeading from "./SkillHeading";
import SkillList from "./SkillList";

function AccordionList(props) {
  

  return (
    <div className="col-6">
      <div className="accordion accordion-flush" id="accordionSkillSets">
        {props.contentData.sets.map((set) => {
          return (
            <div className="accordion-item">
              <AccordionHeader
                key={uuidv4()}
                title={set.title}
                name={set.name}
              />

              <div
                id={"flush-" + set.name}
                className="accordion-collapse collapse"
                aria-labelledby={"flush-heading" + set.name}
                data-bs-parent="#accordionSkillSets"
              >
                <div className="accordion-body">
                  {set.sections.map((section) => {
                    return (
                      <div>
                        <SkillHeading key={uuidv4()} title={section.title} />
                        <SkillList key={uuidv4()} skills={section.skills} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AccordionList;
