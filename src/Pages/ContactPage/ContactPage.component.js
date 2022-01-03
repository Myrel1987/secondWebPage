import React from "react";
import MainLayout from "../../styles/Layouts";
import InnerLayout from "../../styles/Layouts";
import Title from "../../Components/Title/Title.component";
import ButtonMailTo1 from "../../Components/ButtonMailTo/ButtonMailTo1.component";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../../Components/ContactItem/ContactItem.component";
import ContactPageStyled from "./ContactPage.styled";

function ContactPage() {
  const phone = <PhoneIcon />; //you can use the icons from material-ui
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form">
              <div className="form-field">
                <label htmlFor="name">Enter your name*</label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <input type="email" id="email" />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject</label>
                <input type="text" id="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Enter your Message*</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-field f-button">
                <ButtonMailTo1 title={"Send Email"} />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              title={"Phone"}
              icon={phone}
              cont1={"+49 15772110104"}
            />
            <ContactItem
              title={"Email"}
              icon={email}
              cont1={"mirel_apetrei@icloud.com"}
              cont2={"myrel1987@gmail.com"}
            />
            <ContactItem
              title={"Address"}
              icon={location}
              cont1={"Achauerstrasse 41, 78647 Trossingen"}
              cont2={" Germany"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

export default ContactPage;
