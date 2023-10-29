/** @format */

import React from "react";

const Input = ({ name, placeholder, value, onChange }) => {
	return (
		<input
			onChange={onChange}
			defaultValue={value}
			className='outline-none border  border-gray-300 py-1 px-2 rounded focus:shadow-[0_0_0px_1px_#01a3a633] focus:border-[#01a3a663] duration-300 placeholder:text-[14px] w-full'
			placeholder={placeholder}
			name={name}
		/>
	);
};

export default Input;
