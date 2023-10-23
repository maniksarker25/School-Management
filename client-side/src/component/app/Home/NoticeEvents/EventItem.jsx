/** @format */

import ReadMoreBtn from "@/src/component/share/UI/ReadMoreBtn";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventItem = ({ item }) => {
	const {id, title, image, publishAt } = item || {};
	return (
		<GridItem
			colSpan={1}
			className=' bg-[#EEEEEE]'
			display={"flex"}
			flexDirection={"column"}
		>
			{/* image  */}
			<Box height={"235px"}>
				<img
					src={image}
					alt={title}
					className='h-full object-fill w-full'
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
						<Link href={`/events/${title}/${id}`}>
							<Text
								fontSize={"16"}
								cursor={"pointer"}
								lineHeight={"18px"}
								className='hover:text-[#01A2A6] duration-200'
							>
								{title}
							</Text>
						</Link>
					</GridItem>
				</Grid>
			</Box>

			{/* Read more butn  */}
			<Box
				className='mt-auto'
				py={6}
				textAlign={"center"}
			>
				<Link href={`/events/${title}/${id}`}>
					<ReadMoreBtn />
				</Link>
			</Box>
		</GridItem>
	);
};

export default EventItem;
