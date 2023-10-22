/** @format */

import PageTitle from "@/src/component/share/page-title/PageTitle";
import { Box, Grid, GridItem, Stack } from "@chakra-ui/react";
import React from "react";
import Events from "./Events";
import Notices from "./Notices";
import BigBtn from "@/src/component/share/UI/BigBtn";
import { EVENTS_INFO } from "@/src/constant/events";
import { NOTICE_INFO } from "@/src/constant/notice";
import Link from "next/link";

const NoticeEvents = () => {
	return (
		<div className='mt-[70px]'>
			<Box className='contain'>
				<Grid
					templateColumns={{
						base: "repeat(1, 1fr)",
						md: "repeat(3, 1fr)",
					}}
					columnGap={{ base: 0, sm: 8, md: 8 }}
					rowGap={{ base: 8 }}
				>
					{/* events  */}
					<GridItem
						colSpan={[1, 2]}
						className=''
					>
						{/* title  */}
						<Box mb={6}>
							<PageTitle title={"Recent and Upcoming Events"} />
						</Box>
						<Events data={EVENTS_INFO.slice(0, 2)} />
						<Box className='mt-8 text-center'>
							<Link href={"/events"}>
								<BigBtn title={"View All Events"} />
							</Link>
						</Box>
					</GridItem>

					{/* notices  */}
					<GridItem
						colSpan={1}
						className=''
					>
						<Box mb={6}>
							<PageTitle title={"Notices"} />
						</Box>
						<Box
							px={4}
							bg={"white"}
							className='shadow-[0_0_1px_2px_#eeeeee] rounded overflow-y-auto'
							h={"468px"}
						>
							<Notices data={NOTICE_INFO.slice(0, 6)} />
						</Box>
						<Box className='mt-8  text-center '>
							<Link href={"/notices"}>
								<BigBtn title={"View All Notice"} />
							</Link>
						</Box>
					</GridItem>
				</Grid>
			</Box>
		</div>
	);
};

export default NoticeEvents;
