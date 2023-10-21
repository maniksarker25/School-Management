import PageTitle from '@/src/component/share/page-title/PageTitle';
import { Box, Grid, GridItem, Stack } from '@chakra-ui/react';
import React from 'react';
import Events from './Events';
import Notices from './Notices';


const NoticeEvents = () => {
    return (
		<div className='mt-[70px]'>
			<Box className='contain'>
				<Grid
					templateColumns={{
						base: "repeat(2, 1fr)",
						md: "repeat(3, 1fr)",
					}}
					gap={8}
				>
					{/* event  */}
					<GridItem
						colSpan={2}
						className=''
					>
						<Events />
					</GridItem>
					{/* notices  */}
					<GridItem
						colSpan={[2, 1]}
						className=''
					>
						<Notices />
					</GridItem>
				</Grid>
			</Box>
		</div>
	);
};

export default NoticeEvents;