import { navItem } from "@/src/constant/navItem";
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Icon, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const BottomHeader = () => {
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleClick = () => {
        onOpen()
    }
    return (
        <div className="py-8 contain flex justify-between items-center">
            <Link href='/' className="text-2xl font-bold" >School </Link>

            <Box display={['none', 'none', 'flex']} gap={3}>
                {
                    navItem.map((item, index) => <Link className={`text-lg transition-all duration-300 hover:text-[#64A2A6] ${router.pathname === item.link ? 'text-[#64A2A6]' : 'text-[#3D3D47]'}`} href={item.link} key={index}>
                        {item.name}
                    </Link>)
                }
            </Box>
            <Icon display={['block', 'block', 'none']} onClick={handleClick} cursor='pointer' fontSize={30} as={MenuRoundedIcon} />
            <Drawer placement="left" onClose={onClose} isOpen={isOpen} size={['full','sm']}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>{` drawer contents`}</DrawerHeader>
                    <DrawerBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Consequat nisl vel pretium lectus quam id. Semper quis lectus
                            nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
                            quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
                            magna eget est lorem. Erat imperdiet sed euismod nisi porta.
                            Lectus vestibulum mattis ullamcorper velit.
                        </p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default BottomHeader;