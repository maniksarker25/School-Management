/** @format */

import React from "react";

import { Box, Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Rating from "react-rating";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const ClassCard = ({ item }) => {
	const { avatar, name, ratting, price, twitter } = item || {};
	return (
		<Card
			maxW='sm'
			height={"100%"}
			className='hover-border'
		>
			<CardBody
				display={"flex"}
				flexDirection={"column"}
				className='p-0'
			>
				{/* img  */}
				<Box className='w-full '>
					<Image
						src={avatar}
						width={300} // Specify the width in pixels
						height={300} // Specify the height in pixels
						alt='Picture of the author'
					/>
				</Box>
				{/* card info  */}
				<Box
					px={"20px"}
					my='6'
				>
					<Stack spacing='3'>
						<Heading
							size='sm'
							textAlign={"left"}
						>
							{name}
						</Heading>
						<Stack
							display={"flex"}
							flexDirection={"row"}
							alignItems={"center"}
							justifyContent={"space-between"}
						>
							{/* ratting */}
							<Box className='text-[12px]'>
								<Rating
									className='text-yellow-500'
									readonly
									placeholderRating={ratting}
									emptySymbol={
										<StarBorderIcon
											style={{ fontSize: "18px" }}
										/>
									}
									placeholderSymbol={
										<StarIcon
											style={{ fontSize: "18px" }}
										/>
									}
									fullSymbol={
										<StarIcon
											style={{ fontSize: "18px" }}
										/>
									}
								/>
							</Box>
							{/* price  */}
							<Box
								px={"3"}
								py={"0.1"}
								bg={`${
									price === "free"
										? "secondaryColor.900"
										: "primaryColor.900"
								}`}
								borderRadius={"30"}
								color={"white"}
								fontSize={"14px"}
							>
								{price}
							</Box>
						</Stack>
					</Stack>

					{/* <Box className='flex-1'></Box> */}
					{/* social icon */}
					{/* <Stack
						className='mt-3'
						direction={"row"}
						justifyContent={"center"}
						color={"gray"}
					>
						<Link href={twitter}>
							<FacebookIcon
								sx={{
									":hover": {
										color: "#4867AA",
									},
								}}
								fontSize='small'
								className='duration-500 transform hover:-translate-y-1'
							/>
						</Link>
						<Link href={twitter}>
							<TwitterIcon
								sx={{
									":hover": {
										color: "#1DA1F2",
									},
								}}
								fontSize='small'
								className='duration-500 transform hover:-translate-y-1'
							/>
						</Link>
						<Link href={twitter}>
							<LinkedInIcon
								sx={{
									":hover": {
										color: "#0077B5",
									},
								}}
								fontSize='small'
								className='duration-500 transform hover:-translate-y-1'
							/>
						</Link>
					</Stack> */}
				</Box>
			</CardBody>
		</Card>
	);
};

export default ClassCard;
