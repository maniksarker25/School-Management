/** @format */

import React from "react";
import Banner from "../Banner";

import FeatureInstructor from "../FeatureInstructor";
import SpecialClasses from "../SpecialClasses";
import LatestNotice from "../LatestNotice";

const Home = () => {
	return (
		<div>
			<Banner />
			<SpecialClasses />

			<LatestNotice />
			<FeatureInstructor />
		</div>
	);
};

export default Home;
