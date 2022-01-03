import React from "react";
import PrimaryButtonStyled from "./PrimaryButton.styled";
import myCV from "../../data/myCV.pdf";

function PrimaryButton({ title }) {
  return (
    <PrimaryButtonStyled>
      <a href={myCV} download>
        {title}
      </a>
    </PrimaryButtonStyled>
  );
}

export default PrimaryButton;
