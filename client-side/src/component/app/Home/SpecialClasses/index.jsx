/** @format */

import React from "react";

import {
	Box,
	Grid,
	GridItem,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from "@chakra-ui/react";

import PageTitle from "@/src/component/share/page-title/PageTitle";
import ClassCard from "./SpecialClassCard";
import { SPECIAL_CLASS_INFO } from "@/src/constant/specialClass";

const SpecialClasses = () => {
	return (
		<div className='mt-[70px]'>
			<div className='contain '>
				<Box mb={6}>
					<PageTitle title={"Our Special Classes"} />
				</Box>

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
						<TabPanel p={0}>
							<Grid
								templateColumns={{base:"repeat(1, 1fr)",
									sm:"repeat(2, 1fr)",
									md:"repeat(3, 1fr)",
									lg:"repeat(4, 1fr)",}}
								gap='10'
							>
								{SPECIAL_CLASS_INFO.map(item => {
									return (
										<GridItem key={item.classId}>
											<ClassCard item={item} />
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
		</div>
	);
};

export default SpecialClasses;
