import React from "react";

function LinkImage(props){
    return (<a href={props.url}>
    <img
      className={props.customCss}
      src={props.imgUrl}
      alt={props.imgAlt}
    />
  </a>)
}

export default LinkImage;