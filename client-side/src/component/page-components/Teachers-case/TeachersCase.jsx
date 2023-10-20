/** @format */

import React from "react";
import PageTitle from "../../share/page-title/PageTitle";
import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Grid,
	GridItem,
	Heading,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import { TEACHERS_INFO } from "@/src/constant/teachers";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const TeachersCase = () => {
	return (
		<div>
			<PageTitle />

			<Tabs
				size='md'
				variant='enclosed'
				align='center'
			>
				<TabList>
					<Tab>ENGLISH</Tab>
					<Tab>Popular Teachers</Tab>
				</TabList>
				<TabPanels className='mt-3'>
					<TabPanel>
						<Grid
							templateColumns={`repeat(4, 1fr)`}
							gap={"10"}
						>
							{TEACHERS_INFO.map(item => {
								// console.log(item);
								const {
									avatar,
									name,
									position,
									color,
									facebook,
									twitter,
									linkedIn,
								} = item;
								return (
									<GridItem className=''>
										<Card maxW='sm'>
											<CardBody>
												{/* img  */}
												<Box className='py-5 '>
													<Image
														src={avatar}
														width={120}
														height={120}
														alt='Picture of the author'
														className="rounded-full"
													/>
												</Box>
												<Stack
													mt='6'
													spacing='3'
												>
													<Heading size='md'>
														{name}
													</Heading>
													<Text textColor={color}>
														{position}
													</Text>
													<Text className='text-[14px]'>
														At vero eos et accusamus
														et iusto odio
														dignissimos ducimus qui
														blanditiis praesentium
														voluptatum deleniti
														atque corrupti quos
														dolores
													</Text>
												</Stack>
												{/* social icon */}
												<Stack
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
												</Stack>
											</CardBody>

											
										</Card>
									</GridItem>
								);
							})}
						</Grid>
					</TabPanel>
					<TabPanel>
						<p>two!</p>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	);
};

export default TeachersCase;
