/** @format */

import { USEFUL_LINKS } from "@/src/constant/usefulLinks";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const LayoutEventsNotice = ({ data, Component }) => {
	const router = useRouter();

	const routerLink = router.asPath;

	return (
		<Grid
			templateColumns={{
				base: "repeat(1, 1fr)",
				sm: "repeat(2, 1fr)",
				md: "repeat(3, 1fr)",
			}}
			my={5}
			gap={5}
		>
			<GridItem
				colSpan={{ base: 1, sm: 2 }}
				px={2}
			>
				{<Component data={data} />}
			</GridItem>
			<GridItem colSpan={{ base: 1 }}>
				<Box className='border border-gray-200 p-3'>
					<p className='font-bold'>USEFUL LINKS</p>

					<Box mt={"16px"}>
						{USEFUL_LINKS.map(
							item =>
								!item.link.endsWith(routerLink) && (
									<Box
										py={"2px"}
										className='text-[14px] hover:text-[#01A2A6] duration-500 transform translate-y-[2px] hover:translate-y-0'
									>
										<Link
											key={item.id}
											href={item.link}
											className=''
										>
											{item.title}
										</Link>
									</Box>
								)
						)}
					</Box>
				</Box>
			</GridItem>
		</Grid>
	);
};

export default LayoutEventsNotice;
