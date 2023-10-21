/** @format */

import React from "react";
import Banner from "../Banner";
import SpecialClasses from "../SpecialClasses";
import OurFacilities from "../OurFacilities";
import LatestNews from "../LatestNews";
import NoticeEvents from "../NoticeEvents";
import FeatureInstructor from "../FeatureInstructor";
import SchoolInNumber from "../SchoolInNumber/SchoolInNumber";
import Testimonial from "../Testimonial";
import Contact from "../Contact";


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
			<Testimonial />
			<Contact />
		</div>
	);
};

export default Home;
