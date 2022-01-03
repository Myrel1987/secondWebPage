import React from "react";
import TitleStyled from "./Title.styled";

function Title({ title, span }) {
  return (
    <TitleStyled>
      <h2>
        {title}
        <b>
          <span>{span}</span>
        </b>
      </h2>
    </TitleStyled>
  );
}

export default Title;
