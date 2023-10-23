import React from "react";
import About from "./About";
import Faq from "./Faq";
import Rewards from "./Rewards";

const AboutUs = () => {
  return (
    <div className="mt-24">
      <div className="contain md:px-4 lg:px-0">
        <About />
        <Faq />
        <Rewards />
      </div>
    </div>
  );
};

export default AboutUs;
