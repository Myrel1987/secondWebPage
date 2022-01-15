import React from "react";
import { InnerLayout } from "../../styles/Layouts";
import Title from "../../Components/Title/Title.component";
import SmallTitle from "../../Components/SmallTitle/SmallTitle.component";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeStyled from "./Resume.styled";
import ResumeItem from "../../Components/ResumeItem/ResumeItem.component";

import java1 from "../../Images/Certificates/java1.png";
import java2 from "../../Images/Certificates/java2.png";
import java3 from "../../Images/Certificates/java3.png";
import javascript1 from "../../Images/Certificates/javascript1.png";
import javascript2 from "../../Images/Certificates/javascript2.png";
import git from "../../Images/Certificates/git.png";
import py from "../../Images/Certificates/py.jpg";
import web_dev from "../../Images/Certificates/web_dev.png";
import react_developer from "../../Images/Certificates/react_developer.jpg";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2020-present"}
            title={"E-Commerce platform"}
            subTitle={"Personal portfolio project"}
            text={
              "This project is an E-Commerce platform, which has a lot of practical features like: SIgnIn/SignUp(using Firebase), Payments(using Stripe API-test mode), modern React code(styled components, Redux, Hooks...)"
            }
          />
          <ResumeItem
            year={"January 2022 - Present"}
            title={"Check-my-password"}
            subTitle={"Personal Portfolio"}
            text={
              "This is my first python app, which I find it very awesome and useful, especially, if you want to be sure that you have a strong password "
            }
          />
          <ResumeItem
            year={"2021 - Present"}
            title={"Food-Recipe app"}
            subTitle={"Personal Portfolio"}
            text={
              "This is a very user-friendly app, connected to an external API , which generates recipes,I used React, React-Hooks, CSS."
            }
          />
          <ResumeItem
            year={"2021"}
            title={"Personal Website"}
            subTitle={"Personal Project"}
            text={
              "For this project I used React, styled-components, framer-motion, Particles-js, React Hooks  and much more, because I wanted to proof myself that if you want something good, you"
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2019 - present"}
            title={"Computer Science"}
            subTitle={"Wellcode.ro"}
            text={
              "2 years ago I found the best way and mentors to change my career, this platform founded by programmers who worked at companies like Google, Facebook, and others like them. Here I've learned the basics of programming languages using C++, then we where introduced in JAVA and OOP/JAVA. "
            }
          />
          <ResumeItem
            year={"2020-2021"}
            title={"Java, Javascript, Git - courses"}
            subTitle={"Code with Mosh"}
            text={
              "I'll always recommend Mosh and hs courses, they are so easy to assimilate, due to the fact that you can and must practice when you learn"
            }
          />

          <div class="images">
            <div class="photo">
              <img src={java1} height={100} width={100} alt="java1" />
            </div>

            <div class="photo">
              <img src={java2} height={100} width={100} alt="Java2" />
            </div>

            <div class="photo">
              <img src={java3} alt="Java3" />
            </div>
          </div>

          <div class="images">
            <div class="photo">
              <img src={git} alt="git" />
            </div>

            <div class="photo">
              <img src={javascript1} alt="Javascript1" />
            </div>

            <div class="photo">
              <img src={javascript2} alt="Javascript2" />
            </div>
          </div>

          <ResumeItem
            year={"2021"}
            title={
              "Beginner Fullstack developer, React Developer, Python Developer"
            }
            subTitle={"Udemy"}
            text={
              "Those war a very friendly beginner to advanced courses, that opened a new horizon front of me, the world of web-development."
            }
          />

          <div class="images">
            <div class="photo">
              <img src={web_dev} alt="web_dev" />
            </div>
            <div class="photo">
              <img src={react_developer} alt="react_developer" />
            </div>
            <div class="photo">
              <img src={py} alt="Python_developer" />
            </div>
          </div>
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}
export default Resume;
