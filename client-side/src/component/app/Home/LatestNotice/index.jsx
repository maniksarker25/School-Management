/** @format */

import PageTitle from "@/src/component/share/page-title/PageTitle";
import { NOTICE_INFO } from "@/src/constant/notice";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import NoticeCard from "./NoticeCard";

const LatestNotice = () => {
	return (
		<Box className='contain'>
			{/* page title  */}
			<PageTitle title={"Latest Notice"} />

			<div>
				<Grid
					templateColumns={[
						"repeat(1, 1fr)",
						"repeat(2, 1fr)",
						"repeat(3, 1fr)",
						"repeat(4, 1fr)",
					]}
					
				>
					{NOTICE_INFO.map((notice, index) => (
						<GridItem
							key={notice.noticeId}
							w='100%'
						>
							<NoticeCard notice={notice} index={index} />
						</GridItem>
					))}
				</Grid>
			</div>
		</Box>
	);
};

export default LatestNotice;
