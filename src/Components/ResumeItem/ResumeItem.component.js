import React from "react";
import ResumeItemStyled from "./ResumeItem.styled";

function ResumeItem({ year, title, subTitle, text, image }) {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subTitle}</h6>
        <p>{text}</p>
      </div>
    </ResumeItemStyled>
  );
}
export default ResumeItem;
