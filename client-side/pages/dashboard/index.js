/** @format */

import DashboardLayout from "@/src/component/core/layout/DashboardLayout";
import DashboardPageTitle from "@/src/component/share/Dashboard/DashboardPageTitle/DashboardPageTitle";
import { fetchEvents } from "@/src/redux/feture/eventsSlice";
import { Box } from "@mui/material";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
	
	return (
		<Box>
			<Box>
				<DashboardPageTitle title={"Dashboard"} />
			</Box>
			<Box padding={3}>tjis is</Box>
		</Box>
	);
};

export default Dashboard;
