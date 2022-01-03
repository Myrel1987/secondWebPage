import React from "react";
import Particle from "../../Components/Particle";
import HomePageStyled from "./HomePage.styled";
import Facebook from "@material-ui/icons/Facebook";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hello there , I'm Mirel -<span> Your Website creator </span>
          <p>
            "In some ways, programming is like painting. You start with a blank
            canvas and certain basic raw materials. You use a combination of
            science, art, and craft to determine what to do with them." - Andrew
            Hunt
          </p>
          <div className="icons">
            <a
              href="https://www.facebook.com/apetrei.mihaimirel/"
              className="i-facebook"
            >
              <Facebook />
            </a>
            <a href="https://github.com/Myrel1987" className="i-github">
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/apetrei-mirel-60b4ab193/"
              className="i-linkedIn"
            >
              <LinkedIn />
            </a>
          </div>
        </h1>
      </div>
    </HomePageStyled>
  );
}

export default HomePage;
