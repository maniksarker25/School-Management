/** @format */

import PageTitle from "@/src/component/share/page-title/PageTitle";
import { NEWS_INFO } from "@/src/constant/news";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import NewsCard from "./NewsCard";

const LatestNews = () => {
	return (
		<div className='mt-[70px]'>
			<Box className='contain '>
				{/* page title  */}
				<Box mb={6}>
					<PageTitle title={"Latest News"} />
				</Box>

				<div>
					<Grid
						templateColumns={[
							"repeat(1, 1fr)",
							"repeat(2, 1fr)",
							"repeat(3, 1fr)",
							"repeat(4, 1fr)",
						]}
					>
						{NEWS_INFO.map((item, index) => (
							<GridItem
								key={item.noticeId}
								w='100%'
							>
								<NewsCard
									item={item}
									index={index}
								/>
							</GridItem>
						))}
					</Grid>
				</div>
			</Box>
		</div>
	);
};

export default LatestNews;
