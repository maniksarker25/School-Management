import React from 'react';

const PageLayout = ({children,className}) => {
    return (
        <div className='border max-w-[1170px] mx-auto rounded-tl-md rounded-tr-md space-y-4' >
            <div className='w-full flex justify-between bg-gradient-to-l from-[#ffb606] to-[#002147] transparent px-2 py-4 rounded-tl-md rounded-tr-md'>
                <h2 className='text-white'>Events</h2>
                <button>Refresh</button>
            </div>


            <div className='p-4'>

            <div className='bg-gray-400 w-full h-[60px]'>
                form input
            </div>
            <div className='grid grid-cols-[3fr_1fr] mt-8 gap-4'>

                    <div className={...className}>
                        
                                   
                        {
                            children
                        }

                    </div>
                    <div>
                        <h2 className='uppercase text-2xl'>USEFUL LINKS</h2>
                            <span className='inline-block w-[100px] h-[5px] bg-yellow-500'></span>

                            <div className='mt-8'>
                                <ul className='space-y-4'>
                                    <li>Telephone and Email Index</li>
                                    <li>DU Forms</li>
                                    <li>Approved NOCs</li>
                                    <li>E-Tender</li>
                                </ul>
                            </div>
                    </div>
            </div>


            </div>
        </div>
    );
};

export default PageLayout;