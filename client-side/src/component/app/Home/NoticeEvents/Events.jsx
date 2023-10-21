import PageTitle from '@/src/component/share/page-title/PageTitle';
import { Box, Button, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import ReadMoreBtn from '../../../share/UI/ReadMoreBtn';
import BigBtn from '../../../share/UI/BigBtn';
import { EVENTS_INFO } from '@/src/constant/events';
import EventItem from './EventItem';

const Events = () => {
    return (
		<Box>
			{/* title  */}
			<Box mb={6}>
				<PageTitle title={"Recent and Upcoming Events"} />
			</Box>

			<Grid
				templateColumns={{
					base: "repeat(1, 1fr)",
					md: "repeat(2, 1fr)",
				}}
				gap={5}
			>
				{EVENTS_INFO.slice(0, 2).map(item => (
					<EventItem key={item.id} item={ item} />
				))}
			</Grid>

			<Box className='mt-8 text-center'>
				<BigBtn />
			</Box>
		</Box>
	);
};

export default Events;