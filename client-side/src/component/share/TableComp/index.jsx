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
	const dispatch = useDispatch();
	return (
		<div className='min-w-[900px] overflow-x-auto'>
			<table className='text-[11px] mt-5 w-full'>
				{/* order table head  */}
				<thead>
					<tr className='capitalize'>
						<th className='py-3 bg-gray-200 text-start px-2 border border-gray-300 w-[3%] '>
							#
						</th>
						<th className='py-3 bg-gray-200 text-start px-2 border border-gray-300 w-[20%] '>
							Title
						</th>
						<th className='py-3 bg-gray-200 text-start px-2 border border-gray-300 w-[10%]'>
							Image
						</th>
						<th className='py-3 bg-gray-200 text-start px-2 border border-gray-300 w-[15%]'>
							Date of Start
						</th>
						<th className='py-3 bg-gray-200 text-start px-2 border border-gray-300 w-[15%]'>
							Date of End
						</th>
						<th className='py-3 bg-gray-200 text-start px-2 border border-gray-300 w-[15%]'>
							Created By
						</th>
						<th className='py-3 bg-gray-200 text-start px-2 border border-gray-300 w-[7%]'>
							Publish
						</th>
						<th className='py-3 bg-gray-200 text-start px-2 border border-gray-300 w-[10%]'>
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
								<td className='py-3 group-hover:bg-gray-100  text-start px-2 border border-gray-300 w-[3%] '>
									{sl}
								</td>
								<td className='py-3 group-hover:bg-gray-100  text-start px-2 border border-gray-300 w-[20%] '>
									{title}
								</td>
								<td className='py-3 group-hover:bg-gray-100  text-start px-2 border border-gray-300 w-[10%] '>
									<div className='w-full h-[60px]'>
										<img
											src={image}
											alt=''
											className='w-full h-full object-fill'
										/>
									</div>
								</td>
								<td className='py-3 group-hover:bg-gray-100  text-start px-2 border border-gray-300 w-[15%]'>
									{publishAt}
								</td>
								<td className='py-3 group-hover:bg-gray-100  text-start px-2 border border-gray-300 w-[15%]'>
									{endAt}
								</td>
								<td className='py-3 group-hover:bg-gray-100  text-start px-2 border border-gray-300 w-[15%]'>
									{createdBy}
								</td>
								<td className='py-3 group-hover:bg-gray-100  text-start px-2 border border-gray-300 w-[7%]'>
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
