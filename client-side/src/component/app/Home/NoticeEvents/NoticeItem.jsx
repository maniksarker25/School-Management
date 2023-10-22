import ReadMoreBtn from '@/src/component/share/UI/ReadMoreBtn';
import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const NoticeItem = ({ item }) => {
    const { title, publishAt, id } = item || {};
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
			<Link href={`/notices/${title}/${id}`}>
				<p className='text-[14px] font-bold cursor-pointer hover:text-[#01A2A6] duration-500'>
					{title}
				</p>
			</Link>
			<p className='text-[14px]'>Published: {publishAt}</p>
			<Link href={`/notices/${title}/${id}`}>
				<ReadMoreBtn />
			</Link>
		</Box>
	);
};

export default NoticeItem;