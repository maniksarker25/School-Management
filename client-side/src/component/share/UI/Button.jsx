/** @format */

import { Button } from "@mui/material";
import React from "react";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
const ButtonCom = ({ title, isLoading, type }) => {
	return (
		<Button
			type={type}
			disabled={isLoading}
			variant='contained'
			className=' h-full px-4 bg-[#01A2A6] hover:bg-[#01A2A6] rounded text-white duration-500 shadow-[0_0_3px_2px_#01a3a668] hover:shadow-none w-full capitalize'
		>
			{isLoading ? (
				<>
					<TrackChangesIcon className='mr-2 animate-spin ' />{" "}
					processing
				</>
			) : (
				title
			)}
		</Button>
	);
};

export default ButtonCom;
