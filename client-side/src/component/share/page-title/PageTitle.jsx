import React from 'react';

const PageTitle = ({title}) => {
    return (
		<div>
			<h4 className='py-8 text-center text-3xl text-[#A0AEC0]'>
				{title}
			</h4>
		</div>
	);
};

export default PageTitle;