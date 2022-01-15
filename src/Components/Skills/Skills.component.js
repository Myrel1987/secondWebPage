import React from "react";
import SkillsStyled from "./Skills.styled";
import { InnerLayout } from "../../styles/Layouts";
import Title from "../Title/Title.component";
import ProgressBar from "../ProgressBar/ProgressBar.component";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title={"HTML5"} width={"70%"} text={"70%"} />
          <ProgressBar title={"CSS3"} width={"80%"} text={"80%"} />
          <ProgressBar title={"JAVASCRIPT"} width={"65%"} text={"65%"} />
          <ProgressBar title={"JAVA"} width={"70%"} text={"70%"} />
          <ProgressBar title={"C++"} width={"75%"} text={"75%"} />
          <ProgressBar title={"React.JS"} width={"70%"} text={"70%"} />
          <ProgressBar title={"styled-components"} width={"55%"} text={"55%"} />
          <ProgressBar title={"Firebase"} width={"40%"} text={"40%"} />
          <ProgressBar title={"Python"} width={"60%"} text={"60%"} />
          <ProgressBar title={"SQL"} width={"40%"} text={"40%"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

export default Skills;
