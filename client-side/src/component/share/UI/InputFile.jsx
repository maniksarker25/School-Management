/** @format */

import React, { useState } from "react";

const InputFile = ({ name }) => {
	const [fileName, setFileName] = useState("");
	const handelChange = e => {
		const selectedFile = event.target.files[0];
		const fileName = selectedFile.name;
		setFileName(fileName);
	};
	return (
		<label htmlFor='image'>
			<div className='outline-none border  border-gray-300 py-[6px] px-2 rounded focus:shadow-[0_0_0px_1px_#01a3a633] hover:border-[#01a3a663] duration-300 placeholder:text-[14px] w-full cursor-pointer  flex items-center justify-end gap-4 text-[14px]'>
				<div>
					{fileName.length > 30 ? fileName.slice(0, 30) : fileName}
				</div>
				<div className=' pl-2 border-l border-gray-400'>
					Select file
				</div>
			</div>
			<input
				
				type='file'
				id='image'
				name={name}
				className='hidden'
				onChange={handelChange}
			></input>
		</label>
	);
};

export default InputFile;
