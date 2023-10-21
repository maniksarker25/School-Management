import ReadMoreBtn from '@/src/component/share/UI/ReadMoreBtn';
import { Box } from '@chakra-ui/react';
import React from 'react';

const NoticeItem = ({ item }) => {
    const {title, publishAt } = item || {};
    return (
		<Box
			py={4}
			display={"flex"}
			flexDirection={"column"}
			gap={3}
			alignItems={"start"}
			borderBottom={"1px"}
			borderColor={"#eeeeee"}
		>
			<p className='text-[14px] font-bold cursor-pointer hover:text-[#01A2A6] duration-500'>
				{title}
			</p>
			<p className='text-[14px]'>Published: {publishAt}</p>
			<ReadMoreBtn />
		</Box>
	);
};

export default NoticeItem;