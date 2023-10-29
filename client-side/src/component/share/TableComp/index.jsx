/** @format */
import { Box, Stack } from "@mui/material";
import Switch from "@mui/material/Switch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import {
	deleteEvents,
	saveToLocalStorage,
	setShowOrNot,
} from "@/src/redux/feture/eventsSlice";
const label = { inputProps: { "aria-label": "Switch demo" } };
const TableComp = ({ data }) => {
	// const dispatch = useDispatch();
	return (
		<div className="w-[400px] mx-auto md:w-full rounded overflow-hidden overflow-x-auto">
			<table className="w-full">
				{/* order table head  */}
				<thead className="">
					<tr className='capitalize'>
						<th className='py-2 bg-gray-200 text-start px-2 border border-gray-300  '>
							#
						</th>
						<th className='py-3 bg-gray-200 text-start px-2 border border-gray-300  '>
							Title
						</th>
						<th className='py-3 bg-gray-200 text-start px-2 border border-gray-300 '>
							Image
						</th>
						<th className='py-3 bg-gray-200 text-start px-2 border border-gray-300 '>
							 Start Date
						</th>
						<th className='py-3 bg-gray-200 text-start px-2 border border-gray-300 '>
							 End Date
						</th>
						<th className='py-3 text-[15px] md:text-base bg-gray-200 text-start px-2 border border-gray-300 '>
							Created By
						</th>
						<th className='py-3 bg-gray-200 text-start px-2 border border-gray-300 '>
							Publish
						</th>
						<th className='py-3 bg-gray-200 text-start px-2 border border-gray-300 '>
							Action
						</th>
					</tr>
				</thead>

				{/* order tabel body  */}
				<tbody className='text-[13px]'>
					{data.map(item => {
						const {
							sl,
							title,
							image,
							publishAt,
							endAt,
							createdBy,
							isShow,
							id,
						} = item;
						return (
							<tr
								key={id}
								className='capitalize group'
							>
								<td className='py-3 group-hover:bg-gray-100  text-start px-2 border border-gray-300 w-[20px] '>
									{sl}
								</td>
								<td className='py-3 group-hover:bg-gray-100  text-start px-2 border border-gray-300 w-[20px] '>
									{title}
								</td>
								<td className='py-3 group-hover:bg-gray-100  text-start px-2 border border-gray-300 w-[100px] '>
									<div className='w-full h-[60px]'>
										<img
											src={image}
											alt=''
											className='w-full h-full object-fill'
										/>
									</div>
								</td>
								<td className='py-3 group-hover:bg-gray-100  text-start px-2 border border-gray-300 w-[100px]'>
									{publishAt}
								</td>
								<td className='py-3 group-hover:bg-gray-100  text-start px-2 border border-gray-300 w-[100px]'>
									{endAt}
								</td>
								<td className='py-3 group-hover:bg-gray-100  text-start px-2 border border-gray-300 w-[100px]'>
									{createdBy}
								</td>
								<td className='py-3 group-hover:bg-gray-100  text-start px-2 border border-gray-300 w-[100px]'>
									<Switch
										onChange={() => {
											dispatch(
												setShowOrNot({
													id: id,
													value: !isShow,
												})
											);
											dispatch(saveToLocalStorage());
										}}
										{...label}
										defaultChecked={isShow}
									/>
								</td>
								<td className='py-3 group-hover:bg-gray-100  text-start px-2 border border-gray-300 w-[10%]'>
									<Stack
										display={"flex"}
										flexDirection={"row"}
										alignItems={"center"}
										gap={"5px"}
									>
										<Box
											className={
												" w-[30px] h-[30px] border border-[#01A2A6] flex items-center justify-center rounded-full cursor-pointer hover:shadow-[0_0_3px_#01A2A6] transform hover:-translate-y-1 duration-500"
											}
										>
											<VisibilityIcon
												sx={{ fontSize: "16px" }}
											/>
										</Box>
										<Box
											className={
												" w-[30px] h-[30px] border border-[#01A2A6] flex items-center justify-center rounded-full cursor-pointer hover:shadow-[0_0_3px_#01A2A6] transform hover:-translate-y-1 duration-500"
											}
										>
											<BorderColorIcon
												sx={{ fontSize: "16px" }}
											/>
										</Box>
										<Box
											onClick={() => {
												dispatch(deleteEvents(id));
												dispatch(saveToLocalStorage());
											}}
											className={
												" w-[30px] h-[30px] border border-[#F36371] flex items-center justify-center rounded-full cursor-pointer hover:shadow-[0_0_3px_#F36371] transform hover:-translate-y-1 duration-500"
											}
										>
											<DeleteIcon
												sx={{
													fontSize: "16px",
													color: "#F36371",
												}}
											/>
										</Box>
									</Stack>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default TableComp;
