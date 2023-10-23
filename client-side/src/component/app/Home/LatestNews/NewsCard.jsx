/** @format */

import { Box, Card, CardBody, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { sectionAfter } from "./NewsCard.module.css";
const NewsCard = ({ item, index }) => {
	const { title, image, description, date,  } = item;
	return (
		<Card
			h={"100%"}
			className='border border-gray-200  rounded-none '
		>
			<CardBody
				p={0}
				display={"flex"}
				flexDirection={"column"}
				className='group'
				width={"100%"}
			>
				{/* image  */}
				<Box
					className={`${
						index % 2 === 0 ? "order-1" : "order-2"
					} w-full cursor-pointer relative `}
				>
					<div className='w-full h-full bg-[#000000] absolute opacity-0 group-hover:opacity-40 duration-500'></div>
					<Box className=''>
						<img
							className='w-full '
							src={image}
							alt='Picture of the author'
						/>
					</Box>
				</Box>

				{/* text  */}
				<Stack
					width={["full"]}
					minH={["200", "290"]}
					className={`${
						index % 2 === 0
							? "order-2 after:-top-[7.5px]"
							: "order-1 after:-bottom-[7.5px]"
					} ${sectionAfter} relative after:left-[30px]   `}
					spacing='3'
					p={4}
				>
					<Text className='hover:text-[#01A2A6] cursor-pointer text-[14px]'>
						{title}
					</Text>

					<Text className='text-[13px]'>{description}</Text>

					<Text fontSize={"sm"}>
						at: {new Date(date).toLocaleDateString()}
					</Text>
				</Stack>
			</CardBody>
		</Card>
	);
};

export default NewsCard;
