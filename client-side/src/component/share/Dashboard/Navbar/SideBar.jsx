import { sidebar } from "@/src/constant/dashboardSideBar";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from "next/link";
import { useState } from "react";
const SideBar = ({ isOpen, onClose }) => {
    const [expand, setExpand] = useState(-1)
    const userRole = 'admin';
    return (
        <Drawer placement={'left'} size='xs' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent >
                <DrawerCloseButton cursor={'pointer'} as={ChevronLeftIcon} />
                <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                <DrawerBody>
                    <ul className=" w-full ">
                        {
                            userRole === 'admin' && sidebar.admin.map((item, index) => <li key={index}>
                                {item.title} {item.data && expand !== index ? <ChevronRightIcon className="cursor-pointer" onClick={() => setExpand(index)} /> : <ExpandMoreIcon className="cursor-pointer" onClick={() => setExpand(-1)} />}
                                {expand === index && <ul className=" flex gap-y-3 text-justify ms-auto py-5 flex-col w-10/12 ">
                                    {
                                        item.data.map((item, index) => <li key={index} className=" ">
                                            <Link href={item.link}>{item.title}</Link>
                                        </li>)
                                    }
                                </ul>}
                            </li>)
                        }
                    </ul>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export default SideBar;