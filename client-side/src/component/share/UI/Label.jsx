import React from 'react';

const Label = ({title, htmlFor, isRequired}) => {
    return (
		<label
			htmlFor={htmlFor}
			className={`text-[13px] ${isRequired && 'requiredField'}`}
		>
			{title}
		</label>
	);
};

export default Label;