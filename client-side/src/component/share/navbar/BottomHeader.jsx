import { navItem } from "@/src/constant/navItem";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const BottomHeader = () => {
    const router = useRouter()
    return (
        <div className="py-8 contain flex justify-between items-center">
            <Link href='/' className="text-2xl font-bold" >School </Link>

            <Box display={'flex'} gap={3}>
                {
                    navItem.map((item, index) => <Link className={`text-lg transition-all duration-300 hover:text-[#64A2A6] ${router.pathname === item.link ? 'text-[#64A2A6]': 'text-[#3D3D47]'}`} href={item.link} key={index}>
                        {item.name}
                    </Link>)
                }
            </Box>

        </div>
    );
};

export default BottomHeader;