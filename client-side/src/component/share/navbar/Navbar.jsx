import { Box } from '@chakra-ui/react';
import React from 'react';
import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';

const Navbar = () => {
    return (
        <Box className='contain'>
            <TopHeader/>
            <BottomHeader/>
        </Box>
    );
};

export default Navbar;