import React from "react";

function CompanionImg(props) {
  return (
    <div className="col-sm">
      <img
        className="companion-img"
        src={props.url}
        alt="Pretentious Edgy Content"
      />
    </div>
  );
}

export default CompanionImg;
