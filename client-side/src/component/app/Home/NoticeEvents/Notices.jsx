/** @format */

import PageTitle from "@/src/component/share/page-title/PageTitle";
import { Box } from "@chakra-ui/react";
import React from "react";
import BigBtn from "../../../share/UI/BigBtn";
import ReadMoreBtn from "@/src/component/share/UI/ReadMoreBtn";
import { NOTICE_INFO } from "@/src/constant/notice";
import NoticeItem from "./NoticeItem";

const Notices = ({data}) => {
	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
		>
			<Box>
				{data.map(item => (
					<NoticeItem
						key={item.id}
						item={item}
					/>
				))}
			</Box>
		</Box>
	);
};

export default Notices;
