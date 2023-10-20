import React from 'react';

const OpeningHour = () => {
    return (
        <div className='bg-[rgb(229,177,76)] text-white p-6 md:w-1/2'>
            <h4 className='text-2xl '>Opening Hour</h4>
           <div className='space-y-4 mt-6'>
           <div className='flex justify-between border-b border-gray-200 pb-1 text-[14px]'>
                <p>Monday - Friday</p>
                <p>8.00 - 17.00</p>
            </div>
            <div className='flex justify-between border-b border-gray-200 pb-1 text-[14px]'>
                <p>Saturday</p>
                <p>9.30 - 17.30</p>
            </div>
            <div className='flex justify-between  pb-1 text-[14px]'>
                <p>Sunday</p>
                <p>9.30 - 15.00</p>
            </div>
           </div>
        </div>
    );
};

export default OpeningHour;