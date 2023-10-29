/** @format */
import { useForm } from "react-hook-form";
import DashboardPageTitle from "@/src/component/share/Dashboard/DashboardPageTitle/DashboardPageTitle";

import React, { useEffect, useState } from "react";
import SaveAsIcon from "@mui/icons-material/SaveAs";

import Input from "@/src/component/share/UI/Input";
import { Box, Grid, Stack } from "@mui/material";
import DatePickerComp from "@/src/component/share/UI/DatePickerComp";
import TextBox from "@/src/component/share/UI/TextBox";
import Switch from "@mui/material/Switch";
import InputFile from "@/src/component/share/UI/InputFile";
import Label from "@/src/component/share/UI/Label";
import ButtonCom from "@/src/component/share/UI/Button";

const label = { inputProps: { "aria-label": "Switch demo" } };
const EVENT_INIT = {
	title: "",
	description: "",
	fromDate: null,
	toDate: null,
	isShow: true,
};
const index = () => {
	const [state, setState] = useState(EVENT_INIT);
	const [fromDate, setFromDate] = useState(null);
	const [toDate, setToDate] = useState(null);

	const handleSubmit = e => {
		e.preventDefault();
		const image = e.target.image;
		console.log(state, image, "this is state");
	};

	const handelChange = e => {
		const { name, value } = e.target;
		setState(pre => ({
			...pre,
			[name]: value,
		}));
	};

	useEffect(() => {
		setState(pre => ({
			...pre,
			fromDate,
			toDate,
		}));
	}, [fromDate, toDate]);

	console.log(state, "this is state", fromDate);
	return (
		<div className=''>
			<Box>
				<DashboardPageTitle title={"Events"} />
			</Box>
			<Box padding={3}>
				<Box
					bgcolor={"white"}
					padding={3}
					borderRadius={"5px"}
				>
					<Stack
						display={"flex"}
						flexDirection={"column"}
						className='text-[14px]'
					>
						<Box className='cursor-pointer flex items-center gap-1'>
							<SaveAsIcon className='text-[16px]' /> Add Event
						</Box>
					</Stack>

					<form onSubmit={handleSubmit}>
						<Box
							width={{ base: "80%", sm: "70%", md: "50%" }}
							marginTop={"20px"}
							marginX={"auto"}
							display={"flex"}
							flexDirection={"column"}
							gap={3}
						>
							{/* title  */}
							<Box
								display={"flex"}
								flexDirection={"row"}
								alignItems={"start"}
								justifyContent={"space-between"}
							>
								<Box
									width={"20%"}
									textAlign={"right"}
								>
									<Label
										title={"Title"}
										isRequired={true}
									/>
								</Box>
								<Box width={"75%"}>
									<Input
										value={state.title}
										name={"title"}
										onChange={handelChange}
									/>
								</Box>
							</Box>
							{/* start Date  */}
							<Box
								display={"flex"}
								flexDirection={"row"}
								alignItems={"start"}
								justifyContent={"space-between"}
							>
								<Box
									width={"20%"}
									textAlign={"right"}
								>
									<Label
										title={"Date"}
										isRequired={true}
									/>
								</Box>
								{/* date  */}
								<Box width={"75%"}>
									<Grid
										container
										columns={{ xs: 4 }}
										columnSpacing={2}
									>
										<Grid
											item
											xs={2}
										>
											<DatePickerComp // from date component
												state={fromDate}
												setState={setFromDate}
												placeholder={"Search From Date"}
											/>
										</Grid>
										<Grid
											item
											xs={2}
										>
											<DatePickerComp // todate date component
												state={toDate}
												setState={setToDate}
												placeholder={"Search To Date"}
											/>
										</Grid>
									</Grid>
								</Box>
							</Box>
							{/* Description */}
							<Box
								display={"flex"}
								flexDirection={"row"}
								alignItems={"start"}
								justifyContent={"space-between"}
							>
								<Box
									width={"20%"}
									textAlign={"right"}
								>
									<label
										htmlFor=''
										className='text-[14px]'
									>
										Description
									</label>
								</Box>
								<Box width={"75%"}>
									<TextBox
										value={state.description}
										name={"description"}
										onChange={handelChange}
									/>
								</Box>
							</Box>

							{/* Show Website  */}
							<Box
								display={"flex"}
								flexDirection={"row"}
								alignItems={"start"}
								justifyContent={"space-between"}
							>
								<Box
									width={"20%"}
									textAlign={"right"}
								>
									<label
										htmlFor=''
										className='text-[14px]'
									>
										Show Website
									</label>
								</Box>
								<Box width={"75%"}>
									<Switch
										onChange={() => {
											setState(pre => ({
												...pre,
												isShow: !state.isShow,
											}));
										}}
										name='isShow'
										{...label}
										defaultChecked={state.isShow}
									/>
								</Box>
							</Box>

							{/* image  */}
							<Box
								display={"flex"}
								flexDirection={"row"}
								alignItems={"start"}
								justifyContent={"space-between"}
							>
								<Box
									width={"20%"}
									textAlign={"right"}
								>
									<Label
										title={"Image"}
										isRequired={true}
									/>
								</Box>
								<Box width={"75%"}>
									<InputFile
										onChange={handelChange}
										name={"image"}
										value={state.image}
									/>
								</Box>
							</Box>

							{/* Button  */}
							<Box
								display={"flex"}
								flexDirection={"row"}
								alignItems={"start"}
								justifyContent={"space-between"}
							>
								<Box
									width={"20%"}
									textAlign={"right"}
								></Box>

								<Box width={"75%"}>
									<ButtonCom
										type={"submit"}
										title={"Save"}
									/>
								</Box>
							</Box>
						</Box>
					</form>
				</Box>
			</Box>
		</div>
	);
};

export default index;
