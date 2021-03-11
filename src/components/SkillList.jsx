import React from "react";
import {v4 as uuidv4} from "uuid";

function SkillList(props) {
  return (
    <ul className="skill-list">
      {props.skills.map((skill) => {
        return (
          <li key={uuidv4()} className="skill-item skill-100">
            {skill.skill}
            <span className="skillPercent">
              {skill.level && skill.level + "%"}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default SkillList;
