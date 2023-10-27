import { LatestNewsData } from '@/src/constant/LatestNewsData';
import React from 'react';

const NewsDetails = ({id}) => {
    const news = LatestNewsData.find(n=>n.id == id?.id);

    return (
        <div className='contain'>
           <div className='lg:flex gap-4'>
           <div className='lg:w-3/4'>
                <img className='w-full h-[400px] md:h-[500px] lg:[600px]' src={news?.image} alt="" />
                <h3 className='my-4 text-2xl'>{news?.title}</h3>
                <p>{news?.description}</p>
              
            </div>
            <div className='border-2 p-3 lg:w-1/4'>
                <h4 className='text-xl border-b pb-1'>Useful Links</h4>
            </div>
           </div>
        </div>
    );
};

export default NewsDetails;