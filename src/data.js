export const paragraphData =
  "Un ingeniero con pasión por el detalle y siempre buscando el mayor\
impacto con sus proyectos. Ya se Lorem ipsum dolor sit amet,\
consectetur adipiscing elit. Vestibulum ac lacus finibus, auctor\
turpis vel, scelerisque massa. Donec imperdiet quis ante eu laoreet.\
Ut lacinia consectetur neque eget ullamcorper. Mauris commodo ipsum\
a purus varius auctor. Maecenas finibus consectetur nisi commodo\
vestibulum. Vestibulum est dui, viverra a sapien ut, pretium\
venenatis erat. Integer sit amet rutrum justo, tincidunt venenatis\
dolor. In efficitur posuere erat non rhoncus. Nunc eget neque non\
nulla sodales rutrum sit amet porta tortor.";

export const PorfolioData = {
  projects: [
    {
      description: `<a href="https://github.com/eligiobz/ERPace-server">MobilERP/ERPAce</a>
      es un POS (Point Of Sale) que desarrollé durante 2017 y 2019,
      Actualmente lo estoy rediseñado en una nueva solución completa,
      escalandolo a ERP con nuevas funciones y una interfaz mas amigable.
      MobilERP/ERPAce fue un prototipo de la funcionalidad buscasda y
      validada en campo para la creación de una nueva app.`,
    },
    {
      description: `La
      <a href="https://www.port.ac.uk">Universidad de Portsmouth</a>
      desarrollaba en conjunto con el sector privado una investigación
      para validar la creación de un nuevo producto que satisfiera un
      nuevo nicho de mercado. Mi rol de asociado no solo requeria un
      fuerte perfil tecnico, sino tambien la flexibilidad y capacidad
      trabajar de cerca con el cliente para descubrir nuevas oportunidades
      de mejora y crecimiento.
      `,
      images: [
        {
          url: "https://www.port.ac.uk/",
          customCss: "smallImage",
          imgUrl: "images/LogoSmallUoP.png",
          imgAlt: "University of Portsmouth",
        },
        {
          url: "http://ktp.innovateuk.org/",
          customCss: "smallImage",
          imgUrl: "images/LogoSmallKTP.png",
          imgAlt: "Knowledge Transfer Partnerships",
        },
      ],
    },
    {
      description: `El proyecto <a href="https://glacsweb.org/">Glacsweb</a> de la
        <a href="https://www.southampton.ac.uk/">
          Universidad de Southampton
        </a>
        necesitaba una manera de poner la información recabada por sus
        sondas al publico general. Se buscaba que los usuarios manipularan
        los datos de de manera interactiva. Se desarrollo una webapp para el
        despliegue personalizado de los datos.`,
      images: [
        {
          url: "https://www.southampton.ac.uk/",
          customCss: "smallImage",
          imgUrl: "images/LogoSmallUoS.png",
          imgAlt: "University of Southamton",
        },
      ],
    },
  ],
};

export const SkillSet = {
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

export default SkillSet;
