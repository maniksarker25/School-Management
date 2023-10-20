import React from 'react';
import SchoolNews from './SchoolNews';
import OpeningHour from './OpeningHour';
import Form from './Form';

const Contact = () => {
    return (
        <div className='mb-16'>
            <div className='lg:flex  contain lg:h-[250px]'>
                <div className='lg:w-1/2 md:flex'>
                <SchoolNews/>
                <OpeningHour/>
                </div>
               <div className='lg:w-1/2'> 
               <Form/>
               </div>
            </div>
            
        </div>
    );
};

export default Contact;