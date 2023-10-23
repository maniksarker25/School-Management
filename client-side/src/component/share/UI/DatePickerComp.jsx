/** @format */

import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const DatePickerComp = ({ state, setState, placeholder }) => {
	return (
		<DatePicker
			placeholderText={placeholder}
			
			className='outline-none border  border-gray-300 py-1 px-2 rounded focus:shadow-[0_0_0px_1px_#01a3a633] focus:border-[#01a3a663] duration-300 placeholder:text-[14px] w-[100%]'
			wid
			selected={state}
			onChange={date => setState(date)}
		/>
	);
};

export default DatePickerComp;
