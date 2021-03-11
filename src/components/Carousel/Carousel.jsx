import React, { Fragment } from "react";
import LinkImage from "../LinkImage";
import CarouselControls from "./CarouselControls";
import { v4 as uuidv4 } from "uuid";

function Carousel(props) {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        
        {props.contentData.projects && props.contentData.projects.map( (project,index) => {
          return(
            <div className={"carousel-item " + (index === 0 && "active")}>
          <p
            dangerouslySetInnerHTML={{
              __html: project.description,
            }}
          ></p>
          <p>
            {project.images &&
              project.images.map((image) => {
                return (
                  <LinkImage
                    key={uuidv4()}
                    url={image.url}
                    customCss={image.customCss}
                    imgUrl={image.imgUrl}
                    imgAlt={image.imgAlt}
                  />
                );
              })}
          </p>
        </div>
          )
        })}
        
        
      </div>
      <CarouselControls key={uuidv4()} />
    </div>
  );
}

export default Carousel;
