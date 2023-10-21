import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneForwardedOutlinedIcon from "@mui/icons-material/PhoneForwardedOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
const ContactInformation = () => {
  return (
    <div>
      {/* TODO: */}
      <h4 className="text-xl text-gray-600">Before Contacting Us</h4>
      <p className="text-gray-500 mt-6 text-[14px]">
        Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
        tempor incidunt ut labore et dolore magna aliqua. Non equidem invideo,
        miror magis posuere velit aliquet.
      </p>
      <div className="mt-10">
        <h4 className="text-xl text-gray-600">Contact Information</h4>
        <div className="mt-4 space-y-4 text-gray-500">
          <div className="flex items-center gap-2">
            <EmailOutlinedIcon sx={{ color: "rgb(18,162,180)" }} />
            <p>school@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <PhoneForwardedOutlinedIcon sx={{ color: "rgb(18,162,180)" }} />
            <p>044131313131</p>
          </div>
          <div className="flex items-center gap-2">
            <LocationOnOutlinedIcon sx={{ color: "rgb(18,162,180)" }} />
            <p>Dhaka,Bangladesh</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h4 className="text-xl text-gray-600">Social Media</h4>
        <div className="mt-4 flex items-center gap-4">
          <button className="flex gap-2 items-center bg-[rgb(240,240,240)] px-6 py-2 rounded-3xl ">
            <LinkedInIcon sx={{ fontSize: "20px" }} /> <p>Linkedin</p>
          </button>
          <button className="flex gap-2 items-center bg-[rgb(240,240,240)] px-6 py-2 rounded-3xl ">
            <FacebookIcon sx={{ fontSize: "20px" }} /> <p>Facebook</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
