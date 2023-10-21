import React from 'react';
import SchoolNews from './SchoolNews';
import OpeningHour from './OpeningHour';
import Form from './Form';
import { Box } from '@chakra-ui/react';

const Contact = () => {
    return (
        <Box mt='70px' >
            <div className='lg:flex  contain lg:h-[250px]'>
                <div className='lg:w-1/2 md:flex'>
                <SchoolNews/>
                <OpeningHour/>
                </div>
               <div className='lg:w-1/2'> 
               <Form/>
               </div>
            </div>
            
        </Box>
    );
};

export default Contact;