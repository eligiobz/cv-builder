import React from "react";
import Paragraph from "./Paragraph";
import SkillHeading from "./SkillHeading";

function SkillList(props) {

  return (
    <ul className="skill-list">
      {props.skills.map((skill) => {
        return (
          <li className="skill-item skill-100">
            {skill.skill}
            <span className="skillPercent">{skill.level}%</span>
          </li>
        );
      })}
    </ul>
  );
}

export default SkillList;
