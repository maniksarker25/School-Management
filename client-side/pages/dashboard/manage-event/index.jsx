/** @format */

import {
	Box,
	
	Stack,
	Table,
	TableContainer,
	Tbody,
	Td,
	
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";

import React from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DashboardPageTitle from "@/src/component/share/Dashboard/DashboardPageTitle/DashboardPageTitle";
import Input from "@/src/component/share/UI/Input";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
const index = () => {
	return (
		<div>
			<Box>
				<DashboardPageTitle title={"Events"} />
			</Box>
			<Box p={4}>
				<Box
					bg={"white"}
					p={4}
				>
					<Stack
						display={"flex"}
						flexDirection={"column"}
						className='text-[14px]'
					>
						<Box className='cursor-pointer flex items-center gap-1'>
							<FormatListBulletedIcon className='text-[16px]' />{" "}
							Manage Events
						</Box>

						<Box>
							<Stack display={"flex"}>
								<Box
									width={{
										base: "100%",
										sm: "40%",
										md: "30%",
									}}
									ml={"auto"}
								>
									<Input
										name={"search"}
										placeholder={"Search"}
									/>
								</Box>
							</Stack>
						</Box>

						<>
							<TableContainer>
								<Table size='sm'>
									<Thead>
										<Tr>
											<Th
												width={"2%"}
												py={3}
												bg={"#EEEEEE"}
											>
												#
											</Th>
											<Th
												width={"20%"}
												py={3}
												bg={"#EEEEEE"}
											>
												Title
											</Th>
											<Th
												width={"20%"}
												py={3}
												bg={"#EEEEEE"}
											>
												Image
											</Th>
											<Th
												width={"15%"}
												py={3}
												bg={"#EEEEEE"}
											>
												Date of Start
											</Th>
											<Th
												width={"15%"}
												py={3}
												bg={"#EEEEEE"}
											>
												Date of End
											</Th>
											<Th
												width={"15%"}
												py={3}
												bg={"#EEEEEE"}
											>
												Created By
											</Th>
											<Th
												width={"20%"}
												py={3}
												bg={"#EEEEEE"}
											>
												Action
											</Th>
										</Tr>
									</Thead>
									<Tbody>
										<Tr>
											<Td width={"2%"}>1</Td>
											<Td width={"20%"}>
												Summer vacation{" "}
											</Td>
											<Td width={"20%"}>image</Td>
											<Td width={"15%"}>01.Jun.2023</Td>
											<Td width={"15%"}>01.Jun.2023</Td>
											<Td width={"15%"}>
												Jennifer Adams
											</Td>
											<Td width={"20%"}>
												<Stack
													display={"flex"}
													flexDirection={"row"}
													alignItems={"center"}
													gap={2}
												>
													<Box className='w-[30px] h-[30px] border border-gray-500 rounded-full  flex items-center justify-center cursor-pointer transform hover:-translate-y-1 duration-500 hover:shadow-[0_0_2px_#01A2A6]'>
														<VisibilityIcon className='text-[16px]' />
													</Box>
													<Box className='w-[30px] h-[30px] border border-gray-500 rounded-full  flex items-center justify-center cursor-pointer transform hover:-translate-y-1 duration-500 hover:shadow-[0_0_2px_#01A2A6]'>
														<EditIcon className='text-[16px]' />
													</Box>
													<Box className='w-[30px] h-[30px] border border-gray-500 rounded-full  flex items-center justify-center cursor-pointer transform hover:-translate-y-1 duration-500 hover:shadow-[0_0_3px_#F36371]'>
														<DeleteIcon className='text-[16px] text-[#F36371]' />
													</Box>
												</Stack>
											</Td>
										</Tr>
									</Tbody>
								</Table>
							</TableContainer>
						</>
					</Stack>
				</Box>
			</Box>
		</div>
	);
};

export default index;
