/** @format */

import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
const DashboardPageTitle = ({title}) => {
	return (
		<Stack
			py={3}
			px={4}
			bg={"#F1F1F1"}
			display={"flex"}
			flexDirection={"row"}
			alignItems={"center"}
			borderTop={"1px"}
			borderColor={"gray.300"}
			className='shadow-[1px_1px_3px_#000000]'
		>
			{/* dashbaord icon  */}
			<Link href={"/dashboard"}>
				<Box
					py={"1px"}
					px={"2px"}
					border={"1px"}
					borderColor={"primaryColor.900"}
					className='group cursor-pointer rounded'
				>
					<HomeIcon className='group-hover:text-gray-500 duration-500' />
				</Box>
			</Link>

			<Box>
				<h1 className='text-base  text-gray-800'>{title}</h1>
			</Box>
		</Stack>
	);
};

export default DashboardPageTitle;
