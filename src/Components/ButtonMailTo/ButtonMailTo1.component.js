import React from "react";
import ButtonMailTo from "./ButtonMailTo.styled";

function ButtonMailTo1({ title }) {
  return (
    <ButtonMailTo href={"mailto:mirel_apetrei@icloud.com"}>
      {title}
    </ButtonMailTo>
  );
}

export default ButtonMailTo1;
