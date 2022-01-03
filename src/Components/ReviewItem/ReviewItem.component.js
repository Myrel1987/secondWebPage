import React from 'react';
import RevivewItemStyled from "./ReviewItem.styled";


function ReviewItem({text}) {
   return (
       <RevivewItemStyled>
           <p>{text}</p>
       </RevivewItemStyled>
   )
};

export default ReviewItem;