/** @format */

import DashboardPageTitle from "@/src/component/share/Dashboard/DashboardPageTitle/DashboardPageTitle";
import { Box } from "@chakra-ui/react";
import React from "react";

const index = () => {
	return (
		<div>
			<Box>
				<DashboardPageTitle title={"Events"} />
			</Box>
			<Box p={4}>
				<Box bg={"white"}>this is box</Box>
			</Box>
		</div>
	);
};

export default index;
