/** @format */

import { sidebar } from "@/src/constant/dashboardSideBar";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import {  useState } from "react";
const SideBar = () => {
	const [expand, setExpand] = useState(-1);
	const userRole = "admin";
	
	  const handleButtonClick = (index) => {
		// Refresh AOS
		setExpand(index)
		
	  }
	return (
		
					<ul className=' w-8/12 flex flex-col gap-y-3 '>
						{userRole === "admin" &&
							sidebar?.admin?.map((item, index) => (
								<li key={index} className=" text-lg font-bold capitalize items-c  transition-all duration-500">
									<div className="flex enter justify-between">
									{item?.link ? <Link href={item.link}>{item.title}</Link> : <p >{item.title}</p>}
									{item.data && expand !== index ? (
										<ChevronRightIcon  
											className='cursor-pointer'
											onClick={()=> handleButtonClick(index)}
											
										/>
									) : item.data ? (
										<ExpandMoreIcon  cursor='pointer'  onClick={() => setExpand(-1)}/>
										
									) : ''
									}
									</div>
									{expand === index && (
										<ul  className={` ${ expand === index? '': ' ' }  relative left-5    flex gap-y-3 text-justify   py-5 flex-col`}>
											{item.data.map((item, index) => (
												<li
													key={index}
													className=' '
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
