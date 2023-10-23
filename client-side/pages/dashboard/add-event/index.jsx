/** @format */

import DashboardPageTitle from "@/src/component/share/Dashboard/DashboardPageTitle/DashboardPageTitle";
import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import SaveAsIcon from '@mui/icons-material/SaveAs';


const index = () => {
	return (
		<div>
			<Box>
				<DashboardPageTitle title={"Events"} />
			</Box>
			<Box p={4}>
				<Box
					bg={"white"}
					p={4}
				>
					<Stack
						display={"flex"}
						flexDirection={"row"}
						className='text-[14px]'
					>
						
						<Box className='cursor-pointer flex items-center gap-1' ><SaveAsIcon className="text-[16px]"/> Create Event</Box>

						
					</Stack>
				</Box>
			</Box>
		</div>
	);
};

export default index;
