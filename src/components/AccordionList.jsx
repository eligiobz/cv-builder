import React from "react";
import {v4 as uuidv4} from "uuid";
import SkillHeading from "./SkillHeading";
import SkillList from "./SkillList";

function AccordionList(props){
    const skills_1 = [
        { skill: ".NET Core (ASP/WebAPI)", level: 100 },
        { skill: "Python (Flask)", level: 100 },
        { skill: "Java (Spring Boot/RabbitMQ)", level: 80 },
        { skill: "JavaScript (nodejs)", level: 80 },
        { skill: "PHP", level: 60 },
      ];

      const skills_2 = [
        { skill: ".NET Core (ASP/WPF)", level: 100 },
        { skill: "Python (PyGTK/PyQT/jinja2)", level: 100 },
        { skill: "JavaScript (jQuery/Angular)", level: 100 },
        { skill: "HTML5/CSS3 (Bootstrap, SASS)", level: 100 },
        { skill: "Java (Spring Boot)", level: 80 },
      ];

      const skills_3 = [
        { skill: "GIT", level: 100 },
        { skill: "SQL (Varios DBMS)", level: 100 },
        { skill: "NoSQL (MongoDB)", level: 80 },
        { skill: "BASH, ZSH", level: 80 },
        { skill: "Servidores Web (nginx/Apache)", level: 60 },
        { skill: "Server Hardening (SSH/OpenSSL)", level: 60 },
      ];

    //   const skills_4 = [
    //     { skill: "", level:  },
    //     { skill: "", level:  },
    //     { skill: "", level:  },
    //     { skill: "", level:  },
    //     { skill: "", level:  },
    //   ];

    //   const skills_5 = [
    //     { skill: "", level:  },
    //     { skill: "", level:  },
    //     { skill: "", level:  },
    //     { skill: "", level:  },
    //     { skill: "", level:  },
    //   ];

    return(
        // <!-- Columna 1 -->
               <div className="col-6">
                  
                  <div
                     className="accordion accordion-flush"
                     id="accordionSkillSets"
                  >
                     {/* <!-- Item 1 --> */}
                     <div className="accordion-item">
                        {/* <!-- Header 1 --> */}
                        <h2
                           className="accordion-header"
                           id="flush-headingTechSkills"
                        >
                           <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-techSkills"
                              aria-expanded="false"
                              aria-controls="flush-techSkills"
                           >
                              <i className="fas fa-laptop-code"></i>&nbsp;&nbsp;Habilidades Tecnicas
                           </button>
                        </h2>
                        {/* <!-- End of Header 1 --> */}
                        <div
                           id="flush-techSkills"
                           className="accordion-collapse collapse"
                           aria-labelledby="flush-headingTechSkills"
                           data-bs-parent="#accordionSkillSets"
                        >
                           {/* <!-- Item 1 Body --> */}
                           <div className="accordion-body">

                              {/* <!-- Server stuff --> */}
                              <SkillHeading title="Servidor"/>
                              <SkillList key={uuidv4()} skills={skills_1} />

                              {/* <!-- Client stuff --> */}
                              <SkillHeading title="Cliente"/>
                              <SkillList key={uuidv4()} skills={skills_2} />

                              
                              <SkillHeading title="Otras tecnologias"/>
                              <SkillList key={uuidv4()} skills={skills_3} />
                           </div>
                           {/* <!-- End of Item 1 Body--> */}
                        </div>
                     </div>
                     {/* <!-- End of Item 1 --> */}




                     {/* <!-- Item 2 --> */}
                     <div className="accordion-item">
                        {/* <!-- Header Item 2 --> */}
                        <h2
                           className="accordion-header"
                           id="flush-headingOtherSkills"
                        >
                           <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-otherSkills"
                              aria-expanded="false"
                              aria-controls="flush-otherSkills"
                           >
                              <i className="fas fa-project-diagram"></i>&nbsp;&nbsp;Habilidades No Tecnicas
                           </button>
                        </h2>
                        {/* <!-- End of Header of Item 2 --> */}
                        <div
                           id="flush-otherSkills"
                           className="accordion-collapse collapse"
                           aria-labelledby="flush-headingOtherSkills"
                           data-bs-parent="#accordionSkillSets"
                        >
                           {/* <!-- Item 2 Body --> */}
                           <SkillHeading title="Trabajo en Equipo"/>
                           <ul className="skill-list">
                             <li className="skill-item skill-100">Manejo de metodologias (XP/SCRUM)</li>
                             <li className="skill-item skill-100">Trabajo en equipo</li>
                             <li className="skill-item skill-100">Spec en base a user stories</li>
                             <li className="skill-item skill-100">Flexiblilidad</li>
                             <li className="skill-item skill-100">Comodo trabajando con el cliente</li>
                           </ul>

                           <SkillHeading title="Freelance"/>
                           <ul className="skill-list">
                             <li className="skill-item skill-100">Proactivo</li>
                             <li className="skill-item skill-100">Enfocado en cliente</li>
                             <li className="skill-item skill-100">Metodico</li>
                             <li className="skill-item skill-100">Atencion al detalle</li>
                             <li className="skill-item skill-100">Desarrollo completo (FullStack)</li>
                           </ul>
                           {/* <!-- End of Item 2 Body --> */}

                        </div>
                     </div>
                     {/* <!-- End of item 2 --> */}
                     {/* <!--  Enf of acordeon--> */}
                  </div>
               </div>
    );
}

export default AccordionList;