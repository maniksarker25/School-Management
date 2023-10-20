/** @format */

import React from "react";
import Banner from "../Banner";
import SpecialClasses from "../SpecialClasses/SpecialClasses";
import FeatureInstructor from "../FeatureInstructor";
import SchoolInNumber from "../SchoolInNumber/SchoolInNumber";

import Contact from "../Contact";

const Home = () => {
	return (
		<div>
			<Banner />
			<SpecialClasses />
			<FeatureInstructor />
			<SchoolInNumber />
			<Contact />
		</div>
	);
};

export default Home;
