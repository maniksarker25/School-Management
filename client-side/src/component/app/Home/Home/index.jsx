/** @format */

import React from "react";
import Banner from "../Banner";

import FeatureInstructor from "../FeatureInstructor";
import SpecialClasses from "../SpecialClasses";
import LatestNotice from "../LatestNotice";
import SchoolInNumber from "../SchoolInNumber/SchoolInNumber";

import Contact from "../Contact";

const Home = () => {
	return (
		<div>
			<Banner />
			<SpecialClasses />

			<LatestNotice />
			<FeatureInstructor />
			<SchoolInNumber />
			<Contact />
		</div>
	);
};

export default Home;
