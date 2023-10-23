/** @format */

import { sidebar } from "@/src/constant/dashboardSideBar";
import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Icon,
	Text,
} from "@chakra-ui/react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { useEffect, useState } from "react";
const SideBar = ({ isOpen, onClose }) => {
	const [expand, setExpand] = useState(-1);
	const userRole = "admin";
	
	  const handleButtonClick = (index) => {
		// Refresh AOS
		setExpand(index)
		
	  }
	return (
		<Drawer
			placement={"left"}
			size='xs'
			onClose={onClose}
			isOpen={isOpen}
		>
			{/* <DrawerOverlay /> */}
			<DrawerContent>
				<DrawerCloseButton
					cursor={"pointer"}
					as={ChevronLeftIcon}
				/>
				<DrawerHeader borderBottomWidth='1px'>
					Basic Drawer
				</DrawerHeader>
				<DrawerBody>
					<ul className=' w-8/12 flex flex-col gap-y-3 '>
						{userRole === "admin" &&
							sidebar?.admin?.map((item, index) => (
								<li key={index} className=" text-lg font-bold capitalize items-c  transition-all duration-500">
									<div className="flex enter justify-between">
									{item?.link ? <Link href={item.link}>{item.title}</Link> : <Text display='inline'>{item.title}</Text>}
									{item.data && expand !== index ? (
										<Icon  as={ChevronRightIcon}
											className='cursor-pointer'
											onClick={()=> handleButtonClick(index)}
											fontSize={30}
										/>
									) : item.data ? (
										<Icon as={ExpandMoreIcon}  cursor='pointer' fontSize={30} onClick={() => setExpand(-1)}/>
										
									) : ''
									}
									</div>
									{expand === index && (
										<ul  className={` ${ expand === index? '': ' ' }  relative left-5    flex gap-y-3 text-justify  py-5 flex-col`}>
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
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};

export default SideBar;
