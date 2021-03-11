import React from "react";
import { v4 as uuidv4 } from "uuid";
import AccordionHeader from "./AccordionHeader";
import SkillHeading from "./SkillHeading";
import SkillList from "./SkillList";

function AccordionList(props) {
  const SkillSet = {
    sets: [
      {
        name: "set_1",
        title: "Habilidades Tecnicas",
        sections: [
          {
            title: "Servidor",
            skills: [
              { skill: ".NET Core (ASP/WebAPI)", level: 100 },
              { skill: "Python (Flask)", level: 100 },
              { skill: "Java (Spring Boot/RabbitMQ)", level: 80 },
              { skill: "JavaScript (nodejs)", level: 80 },
              { skill: "PHP", level: 60 },
            ],
          },
          {
            title: "Cliente",
            skills: [
              { skill: ".NET Core (ASP/WPF)", level: 100 },
              { skill: "Python (PyGTK/PyQT/jinja2)", level: 100 },
              { skill: "JavaScript (jQuery/Angular)", level: 100 },
              { skill: "HTML5/CSS3 (Bootstrap, SASS)", level: 100 },
              { skill: "Java (Spring Boot)", level: 80 },
            ],
          },
          {
            title: "Otras Tecnologias",
            skills: [
              { skill: "GIT", level: 100 },
              { skill: "SQL (Varios DBMS)", level: 100 },
              { skill: "NoSQL (MongoDB)", level: 80 },
              { skill: "BASH, ZSH", level: 80 },
              { skill: "Servidores Web (nginx/Apache)", level: 60 },
              { skill: "Server Hardening (SSH/OpenSSL)", level: 60 },
            ],
          },
        ],
      },
      {
        name: "set_2",
        title: "Habilidades No Tecnicas",
        sections: [
          {
            title: "Trabajo en Equipo",
            skills: [
              { skill: "Manejo de metodologias (XP/SCRUM", level: null },
              { skill: "Trabajo en equipo", level: null },
              { skill: "Spec en base a user stories", level: null },
              { skill: "Flexiblilidad", level: null },
              { skill: "Comodo trabajando con el cliente", level: null },
            ],
          },
          {
            title: "Cliente",
            skills: [
              { skill: "Proactivo", level: null },
              { skill: "Enfocado en cliente", level: null },
              { skill: "Metodico", level: null },
              { skill: "Atencion al detalle", level: null },
              { skill: "Desarrollo completo (FullStack)", level: null },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div className="col-6">
      <div className="accordion accordion-flush" id="accordionSkillSets">

        {SkillSet.sets.map(set => {
            return(<div className="accordion-item">
            
            <AccordionHeader key={uuidv4()} title={set.title} name={set.name} />
            
            <div
              id={"flush-"+set.name}
              className="accordion-collapse collapse"
              aria-labelledby={"flush-heading"+set.name}
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
          </div>);
        })}
        {/* <!--  Enf of acordeon--> */}
      </div>
    </div>
  );
}

export default AccordionList;
