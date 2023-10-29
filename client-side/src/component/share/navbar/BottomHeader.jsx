import { navItem } from "@/src/constant/navItem";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useEffect, useState } from "react";

const BottomHeader = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    onOpen();
  };

  return (
    <div className={`py-8 contain flex justify-between items-center`}>
      <Link href="/" className="text-2xl font-semibold">
        <span className="text-[#01A2A6]"> Nexus</span> School{" "}
      </Link>

      <Box display={{ base: "none", lg: "flex" }} gap={3}>
        {navItem.map((item, index) => (
          <Link
            className={`text-lg transition-all duration-300 hover:text-[#64A2A6] ${
              router.pathname === item.link
                ? "text-[#64A2A6]"
                : "text-[#3D3D47]"
            }`}
            href={item.link}
            key={index}
          >
            {item.name}
          </Link>
        ))}
      </Box>
      <Icon
        display={["block", "block", "block", "none"]}
        onClick={handleClick}
        cursor="pointer"
        fontSize={30}
        as={MenuRoundedIcon}
      />
      <Drawer
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
        size={["full", "sm"]}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`School`}</DrawerHeader>
          <DrawerBody>
            <ul className="flex flex-col space-y-4">
              {navItem?.map((item, index) => (
                <li className="text-lg border-b pb-1" key={index}>
                  <Link href={item?.link}>{item?.name}</Link>
                </li>
              ))}
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default BottomHeader;
