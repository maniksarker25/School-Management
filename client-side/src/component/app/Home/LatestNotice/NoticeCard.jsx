/** @format */

import { Box, Card, CardBody, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { sectionAfter } from "./NoticeCard.module.css";
const NoticeCard = ({ notice, index }) => {
	console.log(index)
	const { noticeId, title, image, description, date, textPosition } = notice;
	return (
		<Card
			maxW='sm'
			h={"100%"}
			className='border border-gray-200  rounded-none'
		>
			<CardBody
				p={0}
				display={"flex"}
				flexDirection={"column"}
				className="group"
			>
				{/* image  */}
				<Box
					className={`${
						index % 2 === 0 ? "order-1" : "order-2"
					} w-full cursor-pointer relative`}
				>
					<div className="w-full h-full bg-[#000000] absolute opacity-0 group-hover:opacity-40 duration-500">

					</div>
					<Image
						src={image}
						width={300} // Specify the width in pixels
						height={280} // Specify the height in pixels
						alt='Picture of the author'
					/>
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

export default NoticeCard;
