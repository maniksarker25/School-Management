/** @format */

import ReadMoreBtn from "@/src/component/share/UI/ReadMoreBtn";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const EventItem = ({ item }) => {
	const { title, image, publishAt } = item;
	return (
		<GridItem
			colSpan={1}
			className=' bg-[#EEEEEE]'
		>
			{/* image  */}
			<Box height={'235px'}>
				<img
					src={image}
					alt={title}
					className="h-full object-fill w-full"
				/>
			</Box>

			{/* content  */}
			<Box p={10}>
				<Grid
					templateColumns={{ base: "repeat(3, 1fr)" }}
					gap={5}
				>
					{/* date  */}
					<GridItem
						colSpan={1}
						display={"flex"}
						flexDirection={"column"}
						alignItems={"center"}
						lineHeight={"28px"}
					>
						<Text
							className='text-[30px] font-bold'
							color={"primaryColor.900"}
						>
							19
						</Text>
						<p>OCT, 2023</p>
					</GridItem>

					{/* event title  */}
					<GridItem colSpan={2}>
						<Text
							fontSize={"16"}
							cursor={"pointer"}
							lineHeight={"18px"}
							className='hover:text-[#01A2A6] duration-200'
						>
							{title}
						</Text>
					</GridItem>
				</Grid>
			</Box>

			{/* Read more butn  */}
			<Box
				py={6}
				textAlign={"center"}
			>
				<ReadMoreBtn />
			</Box>
		</GridItem>
	);
};

export default EventItem;
