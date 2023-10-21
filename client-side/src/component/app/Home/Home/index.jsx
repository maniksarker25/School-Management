/** @format */

import React from "react";
import Banner from "../Banner";

import FeatureInstructor from "../FeatureInstructor";
import SpecialClasses from "../SpecialClasses";

import SchoolInNumber from "../SchoolInNumber/SchoolInNumber";

import Contact from "../Contact";
import OurFacilities from "../OurFacilities";
import LatestNews from "../LatestNews";
import NoticeEvents from "../NoticeEvents";

const Home = () => {
  return (
		<div>
			<Banner />
			<SpecialClasses />
			<OurFacilities />
		  <LatestNews />
		  <NoticeEvents />
			<FeatureInstructor />
			<SchoolInNumber />
			<Contact />
		</div>
  );
};

export default Home;
