import PageTitle from '@/src/component/share/page-title/PageTitle';
import { Box } from '@chakra-ui/react';
import React from 'react';
import BigBtn from '../../../share/UI/BigBtn';
import ReadMoreBtn from '@/src/component/share/UI/ReadMoreBtn';
import { NOTICE_INFO } from '@/src/constant/notice';
import NoticeItem from './NoticeItem';

const Notices = () => {
    return (
		<Box
			height={"100%"}
			display={"flex"}
			flexDirection={"column"}
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
				{NOTICE_INFO.map(item => <NoticeItem key={item.id} item={item } />)}
			</Box>

			<Box className='mt-auto text-center '>
				<BigBtn />
			</Box>
		</Box>
	);
};

export default Notices;