import React from "react";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";
import OnlineApplication from "../OnlineApplicaiton";
import PageHeader from "../../share/UI/PageHeader";

const ContactUs = () => {
  return (
    <div>
      <div className="hidden md:block">
       <PageHeader pageName={"Contact"}/>
      </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.378414635341!2d90.39037217599386!3d23.733881489409104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8e90a449e4f%3A0xb7092a9c25197fa4!2sUniversity%20of%20Dhaka!5e0!3m2!1sen!2sbd!4v1697879990420!5m2!1sen!2sbd"
        //   width="800"
        //   height="600"
        //   style="border:0;"
        //   allowfullscreen=""
        style={{height:"400px",width:"100%"}}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
     
      <div className="contain flex gap-10 pt-12">
        <div className="lg:w-2/3">
          <ContactForm />
        </div>
        <div className="lg:w-1/3">
          <ContactInformation />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
