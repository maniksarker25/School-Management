/** @format */

import React from "react";
import Banner from "../Banner";

import FeatureInstructor from "../FeatureInstructor";
import SpecialClasses from "../SpecialClasses";
import LatestNotice from "../LatestNotice";
import SchoolInNumber from "../SchoolInNumber/SchoolInNumber";

import Contact from "../Contact";
import OurFacilities from "../OurFacilities";
import Testimonial from "../../Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <SpecialClasses />
      <OurFacilities/>
      <LatestNotice />
      <FeatureInstructor />
      <SchoolInNumber />
      <Testimonial/>
      <Contact />
    </div>
  );
};

export default Home;
