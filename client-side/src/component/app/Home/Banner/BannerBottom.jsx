import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

const BannerBottom = () => {
  return (
    <div style={{ backgroundColor: "#01A2A6" }}>
      <div className="contain  md:flex justify-between px-4 lg:px-0 ">
        <div className="text-white py-12 text-center md:text-left">
          <MailOutlineIcon sx={{color:"white",fontSize:"45px"}}/>
          <h4 className="mt-6 text-2xl mb-1.5" style={{color:"rgb(255,241,155)"}}>Get Quote</h4>
          <p>Find the price of your course</p>
        </div>
        <div className="text-white py-12 text-center md:text-left">
          <HeadsetMicOutlinedIcon sx={{color:"white",fontSize:"45px"}}/>
          <h4 className="mt-6 text-2xl mb-1.5" style={{color:"rgb(255,241,155)"}}>Ask a Question</h4>
          <p>Not sure what you need? Ask our Advisor</p>
        </div>
        <div className="text-white py-12 text-center md:text-left">
          <PersonAddAltOutlinedIcon sx={{color:"white",fontSize:"45px"}}/>
          <h4 className="mt-6 text-2xl mb-1.5" style={{color:"rgb(255,241,155)"}}>Join Today</h4>
          <p>Join our community and learn</p>
        </div>
      
      </div>
    </div>
  );
};

export default BannerBottom;
