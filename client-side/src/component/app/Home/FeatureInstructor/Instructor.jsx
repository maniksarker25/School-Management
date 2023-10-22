import { Heading, Image } from "@chakra-ui/react";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Instructor = ({ instructor }) => {
  return (
		<div className='flex flex-col items-center  border-2 py-6 mx-4 hover-border '>
			<Image
				width='200px'
				height='200px'
				objectFit='cover'
				borderRadius='100%'
				src={instructor?.image}
			/>

			<h3 className='text-xl mt-4 text-gray-600 '>{instructor?.name}</h3>
			<p className='text-gray-500'>{instructor?.designation}</p>
			<p className='text-center mt-6 text-gray-400 mb-6'>
				{instructor?.description}
			</p>
			<div className='flex items-center text-gray-300 mt-auto gap-1'>
				<a href={instructor?.facebook}>
					<FacebookOutlinedIcon sx={{ fontSize: "20px" }} />
				</a>
				<a href={instructor?.linkedin}>
					{" "}
					<LinkedInIcon sx={{ fontSize: "20px" }} />
				</a>

				<a href={instructor?.instagram}>
					<InstagramIcon sx={{ fontSize: "20px" }} />
				</a>
				<a href={instructor?.twitter}>
					<TwitterIcon sx={{ fontSize: "20px" }} />
				</a>
			</div>
		</div>
  );
};

export default Instructor;
