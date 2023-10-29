/** @format */

import React from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DashboardPageTitle from "@/src/component/share/Dashboard/DashboardPageTitle/DashboardPageTitle";
import Input from "@/src/component/share/UI/Input";
import { Box, Stack } from "@mui/material";
import TableComp from "@/src/component/share/TableComp";
import { EVENTS_INFO } from "@/src/constant/events";
import { useSelector } from "react-redux";

const index = () => {

	// const events = useSelector(state => state.eventsSlice);


	return (
		<div>
			<Box>
				<DashboardPageTitle title={"Events"} />
			</Box>
			<Box padding={3}>
				<Box
					bgcolor={"white"}
					padding={3}
					borderRadius={"5px"}
				>
					<Stack
						display={"flex"}
						flexDirection={"column"}
						className='text-[14px]'
					>
						<Box className='cursor-pointer flex items-center gap-1'>
							<FormatListBulletedIcon className='text-[16px]' />{" "}
							Manage Events
						</Box>

						<Box>
							<Stack display={"flex"}>
								<Box
									width={{
										base: "100%",
										sm: "40%",
										md: "30%",
									}}
									ml={"auto"}
								>
									<Input
										name={"search"}
										placeholder={"Search"}
									/>
								</Box>
							</Stack>
						</Box>
					</Stack>

					<div >
						<TableComp data={EVENTS_INFO} />
					</div>
				</Box>
			</Box>
		</div>
	);
};

export default index;
