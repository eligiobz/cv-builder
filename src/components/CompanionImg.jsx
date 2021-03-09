import React from "react";

function CompanionImg(props) {
  return (
    <div class="col-sm">
      <img class="companion-img" src={props.url} alt="Pretentious Edgy Image" />
    </div>
  );
}

export default CompanionImg;
