import { useDisclosure } from "@chakra-ui/react";
import TopNavBar from "../../share/Dashboard/Navbar/TopNavBar";
import SideBar from "../../share/Dashboard/Navbar/SideBar";

const DashboardLayout = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <TopNavBar onOpen={onOpen}/>
            {children}
            <SideBar  isOpen={isOpen} onClose={onClose}/>
        </>
    );
};

export default DashboardLayout;