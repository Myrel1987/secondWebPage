import React from "react";
import AboutStyled from "./AboutPage.styled";
import MainLayout from "../../styles/Layouts";
import Title from "../../Components/Title/Title.component";
import ImageSection from "../../Components/ImageSection/ImageSection.component";
import ServiceSection from "../../Components/ServiceSection/ServiceSection.component";
import ReviewsSection from "../../Components/ReviewsSection/ReviewsSection.component";

function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
        <ServiceSection />
        <ReviewsSection />
      </AboutStyled>
    </MainLayout>
  );
}

export default AboutPage;
