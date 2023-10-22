/** @format */

import { Box, Grid } from "@chakra-ui/react";

import React from "react";
import EventItem from "./EventItem";

const Events = ({ data }) => {
	return (
		<Box >
			<Grid
				templateColumns={{
					base: "repeat(1, 1fr)",
					md: "repeat(2, 1fr)",
				}}
				gap={5}
			>
				{data?.map(item => (
					<EventItem
						key={item.id}
						item={item}
					/>
				))}
			</Grid>
		</Box>
	);
};

export default Events;
