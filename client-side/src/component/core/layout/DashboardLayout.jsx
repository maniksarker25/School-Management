import { useDisclosure } from "@chakra-ui/react";
import TopNavBar from "../../share/Dashboard/Navbar/TopNavBar";
import SideBar from "../../share/Dashboard/Navbar/SideBar";

const DashboardLayout = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    

    return (
        <div className="dashboard">
            <TopNavBar onOpen={onOpen}/>
            <div className={`${isOpen? 'translate-x-[250px] z-50': 'ms-0'} transition-transform duration-500`}>
            {children}
            </div>
            <SideBar  isOpen={isOpen} onClose={onClose}/>
        </div>
    );
};

export default DashboardLayout;