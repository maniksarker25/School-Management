/** @format */

import { sidebar } from "@/src/constant/dashboardSideBar";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { useState } from "react";
const SideBar = () => {
	const [expand, setExpand] = useState(-1);
	const userRole = "admin";

	const handleButtonClick = (index) => {
		// Refresh AOS
		setExpand(index)

	}
	return (

		<ul className='  flex flex-col  '>
			{userRole === "admin" &&
				sidebar?.admin?.map((item, index) => (
					<li key={index} className={`${expand === index && 'bg-slate-50'} text-[16px] font-bold capitalize hover:bg-slate-50 transition-all duration-500 border-b-2 ps-5 py-4  last:border-b-0`}>
						<div className="flex justify-between ">
							<div className="flex gap-2">
								{item.icon}
								{item?.link ? <Link href={item.link}>{item.title}</Link> : <p >{item.title}</p>}
							</div>
							{item.data && expand !== index ? (
								<ChevronRightIcon
									className='cursor-pointer'
									onClick={() => handleButtonClick(index)}

								/>
							) : item.data ? (
								<ExpandMoreIcon cursor='pointer' onClick={() => setExpand(-1)} />

							) : ''
							}
						</div>
						{expand === index && (
							<ul className={` bg-slate-50       flex gap-y-3 text-justify   py-5 flex-col`}>
								{item.data.map((item, index) => (
									<li
										key={index}
										className=' ps-5'
									>
										<Link href={item.link}>
											{item.title}
										</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
		</ul>

	);
};

export default SideBar;
