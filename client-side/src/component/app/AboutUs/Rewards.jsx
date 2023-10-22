import React from 'react';
import PageTitle from '../../share/page-title/PageTitle';
import { rewards } from '@/src/constant/rewards';

const Rewards = () => {
    return (
        <div className='mt-[70px]'>
            <PageTitle title={"Our Rewards"}/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 '>
                {/* TODO: */}
                {
                    rewards?.map((reward,index)=><div key={index} className='bg-gray-200 p-6 rounded'>
                        <div className='flex flex-col items-center'>
                        <img className='h-40 w-44' src={reward?.image} alt="" />
                        <h3 className='text-center mt-4 text-xl'>{reward?.name}</h3>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Rewards;