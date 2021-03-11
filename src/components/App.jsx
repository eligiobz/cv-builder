import React from "react";
import Navbar from "./Navbar";
import Section from "./Section";
import SkillSet, {paragraphData} from "../data.js";

function App(props) {


  return (
    <div>
      <Navbar />
      <Section
        title="Acerca de mi"
        contentType="paragraph"
        contentData={paragraphData}
        companionImg="images/tech.jpeg"
      />
      <Section
        title="Habilidades"
        contentType="list"
        contentData={SkillSet}
        companionImg={null}
        companionPhrase=""
      />
      <Section
        title="Portafolio"
        contentType="carousel"
        companionImg={null}
        companionPhrase=""
      />
      <Section
        title="Contacto"
        contentType="icons"
        companionImg={null}
        companionPhrase=""
      />
    </div>
  );
}

export default App;
