import React from "react";
import ServiceSectionStyled from "./ServiceSection.styled";
import Title from "../Title/Title.component";
import InnerLayout from "../../styles/Layouts";
import ServiceCard from "../ServiceCard/ServiceCard.component";
import design2 from "../../Images/design2.svg";
import pbsolving from "../../Images/pbsolving.svg";
import reactimg from "../../Images/reactimg.svg";

function ServiceSection() {
  return (
    <InnerLayout>
      <ServiceSectionStyled>
        <Title title={"Services"} span={"services"} />
        <div className="services">
          <ServiceCard
            image={design2}
            title={"Web Design"}
            paragraph={
              "Your website is the center of your digital eco-system, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door."
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={pbsolving}
              title={"Problem-solving"}
              paragraph={
                "\"If I had an hour to solve a problem I'd spend 55 minutes thinking about the problem and 5 minutes thinking about solutions.”  ― Albert Einstein"
              }
            />
          </div>
          <ServiceCard
            image={reactimg}
            title={"React Development"}
            paragraph={
              "Today, ReactJS has become highly popular because of its extra simplicity and flexibility. Many people are even referring to it as the future of web development. It is estimated that more than 1,300 developers and over 94,000 sites utilize ReactJS."
            }
          />
        </div>
      </ServiceSectionStyled>
    </InnerLayout>
  );
}

export default ServiceSection;
