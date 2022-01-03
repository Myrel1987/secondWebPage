import React from "react"
import ContactItemStyled from './ContactItem.styled';

function ContactItem({title, icon, cont1, cont2}) {
   return (
       <ContactItemStyled>
           <div className="left-content">
               {
                   icon
               }
           </div>
           <div className="right-content">
               <h6>{title}</h6>
               <p>{cont1}</p>
               <p>{cont2}</p>
           </div>
       </ContactItemStyled>
   )
}

export default ContactItem;