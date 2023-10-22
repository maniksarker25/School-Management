/** @format */

import EventItem from "@/src/component/app/Home/NoticeEvents/EventItem";
import Events from "@/src/component/app/Home/NoticeEvents/Events";
import NoticeItem from "@/src/component/app/Home/NoticeEvents/NoticeItem";
import Notices from "@/src/component/app/Home/NoticeEvents/Notices";
import LayoutEventsNotice from "@/src/component/share/LayoutEventsNotice/LayoutEventsNotice";

import DatePickerComp from "@/src/component/share/UI/DatePickerComp";
import Input from "@/src/component/share/UI/Input";
import SearchBtn from "@/src/component/share/UI/SearchBtn";
import { EVENTS_INFO } from "@/src/constant/events";
import { NOTICE_INFO } from "@/src/constant/notice";
import { Box, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
const NoticeComp = () => {
	const [fromDate, setFromDate] = useState(null);
	const [toDate, setToDate] = useState(null);
	return (
		<Box className='contain'>
			{/* notice title  */}
			<Stack
				className='shadow-[0px_0_2px_#000]'
				p={4}
				display={"flex"}
				flexDirection={"row"}
				justifyContent={"space-between"}
			>
				<Text fontSize={16}>Notice</Text>
				<Text fontSize={16}>Refresh</Text>
			</Stack>

			{/* search option  */}
			<Grid
				p={3}
				bg={"#EEEEEE"}
				mt={3}
				borderRadius={3}
				templateColumns={{
					base: "repeat(1, 1fr)",
					md: "repeat(2, 1fr)",
				}}
				gap={[2, 5, 5, 10]}
			>
				<GridItem colSpan={1}>
					{/* reusable input  */}
					<Input placeholder={"Search By Notice Title"} />
				</GridItem>

				<GridItem colSpan={1}>
					{/* date  */}
					<Grid
						templateColumns={"repeat(5, 1fr)"}
						gap={4}
					>
						<GridItem colSpan={2}>
							<DatePickerComp // from date component
								state={fromDate}
								setState={setFromDate}
								placeholder={"Search From Date"}
							/>
						</GridItem>
						<GridItem colSpan={2}>
							<DatePickerComp // todate date component
								state={toDate}
								setState={setToDate}
								placeholder={"Search From Date"}
							/>
						</GridItem>
						<GridItem colSpan={1}>
							<SearchBtn //search button
							/>
						</GridItem>
					</Grid>
				</GridItem>
			</Grid>

			{/* <Grid
				templateColumns={{
					base: "repeat(1, 1fr)",
					sm: "repeat(2, 1fr)",
					md: "repeat(3, 1fr)",
				}}
				my={5}
				gap={5}
			>
                <GridItem colSpan={{ base: 1, sm: 2 }} px={ 2}>
					{NOTICE_INFO.map(item => (
						<NoticeItem
							key={item?.id}
                            item={item}
                            isFlex={true}

						/>
					))}
				</GridItem>
				<GridItem colSpan={{ base: 1 }}>{"link"}</GridItem>
			</Grid> */}
			<LayoutEventsNotice
				data={NOTICE_INFO}
				Component={Notices}
			></LayoutEventsNotice>
		</Box>
	);
};

export default NoticeComp;
