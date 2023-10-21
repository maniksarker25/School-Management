import React from 'react';
import AddIcon from "@mui/icons-material/Add";
const ReadMoreBtn = () => {
    return (
		<button className='py-[3px] px-[10px] border-2 border-[#01A2A6] rounded-3xl hover:bg-[#01a2a6] hover:text-[#fff] duration-500 text-[14px] transform hover:-translate-y-1'>
			<AddIcon /> Read More
		</button>
	);
};

export default ReadMoreBtn;