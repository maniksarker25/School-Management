import React from 'react';

const TextBox = ({ name, placeholder, value, onChange }) => {
	return (
		<textarea
			onChange={onChange}
			defaultValue={value}
			className='outline-none border  border-gray-300 py-1 px-2 rounded focus:shadow-[0_0_0px_1px_#01a3a633] focus:border-[#01a3a663] duration-300 placeholder:text-[14px] w-full h-[150px]'
			placeholder={placeholder}
			name={name}
		></textarea>
	);
};

export default TextBox;