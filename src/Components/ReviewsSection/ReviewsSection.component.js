import React from "react";
import InnerLayout from "../../styles/Layouts";
import Title from "../Title/Title.component";
import ReviewItem from "../ReviewItem/ReviewItem.component";
import ReviewsStyled from "./ReviewsSections.styled";

function ReviewsSection() {
  return (
    <ReviewsStyled>
      <Title title={"Reviews"} span={"Reviews"} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem text={"Questions? Then make your demands!"} />
          <ReviewItem text={"Problems? Try to get help!"} />
        </div>
      </InnerLayout>
    </ReviewsStyled>
  );
}
export default ReviewsSection;
