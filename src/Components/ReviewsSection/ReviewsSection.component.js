import React from "react";
import InnerLayout from '../../styles/Layouts';
import Title from "../Title/Title.component";
import ReviewItem from '../ReviewItem/ReviewItem.component';
import ReviewsStyled from "./ReviewsSections.styled";



function ReviewsSection() {
   return (
       <ReviewsStyled>
           <Title title={'Reviews'} span={'Reviews'} />
           <InnerLayout>
               <div className="reviews">
                   <ReviewItem 
                       text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt culpa ad itaque quas?'} 
                   />
                   <ReviewItem 
                       text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt culpa ad itaque quas?'} 
                   />
               </div>
           </InnerLayout>
       </ReviewsStyled>
   )
}
export default ReviewsSection;