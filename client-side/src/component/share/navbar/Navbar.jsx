import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';

const Navbar = () => {
    const [scrollHeight, setScrollHeight] = useState(0);
    const [navBar, setNavbar] = useState(false)
  
    // Use the `useEffect` hook to update the scroll height when the page is scrolled.
    useEffect(() => {
      const handleScroll = () => {
        setScrollHeight(window.scrollY);
      };
      const navbar = document.querySelector('.navbar');
      // Add the scroll event listener
      window.addEventListener('scroll', handleScroll);
      if (navbar) {
  
        console.log('navheifgt', navbar.offsetHeight);
      }
      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    useEffect(() => {
      if (scrollHeight > 100) {
        setNavbar(true)
      }else{
        setNavbar(false)
      }
  
    }, [scrollHeight])
    return (
        <Box className={` ${navBar ? 'fixed left-0 right-0  max-w-[1600px] mx-auto top-0 bg-white  z-50' : 'contain'} `}>
           {!navBar &&  <TopHeader/>}
            <BottomHeader/>
        </Box>
    );
};

export default Navbar;