import React from "react";
import ImageSectionStyled from "./ImageSection.styled";
import resume from "../../Images/resume.jpg";
import PrimaryButton from "../PrimaryButton/PrimaryButton.component";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="/" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Apetrei Mirel</span>
        </h4>
        <p className="paragraph">
          I'm very happy and excited in the same time, because you reach my
          website page. This means that you have a need such as creating an
          website, or perhaps an E-Commerce platform, or you just need "a guy"
          who can help with your tasks. Don't hesitate to contact me... who
          knows, perhaps I could provide a solution to your quest.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Services</p>
          </div>
          <div className="info">
            <p>: Apetrei Mirel</p>
            <p>: 34</p>
            <p>: Romanian</p>
            <p>: Romanian, Italian, English, German</p>
            <p>: Trossingen, Germany</p>
            <p>: Web developer</p>
          </div>
        </div>
        <PrimaryButton title="Downlod CV" />
      </div>
    </ImageSectionStyled>
  );
}

export default ImageSection;
