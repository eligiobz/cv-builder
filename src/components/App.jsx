import React from "react";
import Navbar from "./Navbar";
import Section from "./Section";

function App(props) {
    const paragraphData="Un ingeniero con pasión por el detalle y siempre buscando el mayor\
    impacto con sus proyectos. Ya se Lorem ipsum dolor sit amet,\
    consectetur adipiscing elit. Vestibulum ac lacus finibus, auctor\
    turpis vel, scelerisque massa. Donec imperdiet quis ante eu laoreet.\
    Ut lacinia consectetur neque eget ullamcorper. Mauris commodo ipsum\
    a purus varius auctor. Maecenas finibus consectetur nisi commodo\
    vestibulum. Vestibulum est dui, viverra a sapien ut, pretium\
    venenatis erat. Integer sit amet rutrum justo, tincidunt venenatis\
    dolor. In efficitur posuere erat non rhoncus. Nunc eget neque non\
    nulla sodales rutrum sit amet porta tortor.";

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
      contentData=[]
      companionImg={null}
      companionPhrase=""/>
      <Section 
      title="Portafolio"
      contentType="carousel"
      companionImg={null}
      companionPhrase=""/>
      <Section 
      title="Contacto"
      contentType="icons"
      companionImg={null}
      companionPhrase=""/>
    </div>
  );
}

export default App;
