import PageTitle from '@/src/component/share/page-title/PageTitle';
import { facilitiesData } from '@/src/constant/facilities';
import React from 'react';
import FacilitiesCard from './FacilitiesCard';

const OurFacilities = () => {
    return (
        <div className='mt-[70px] contain'>
            <PageTitle title={"Our Facilities"}/>
            <p className='text-center mt-3 mb-6'>We offer world-class facilities.</p>
            {/* TODO: data come from database */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                   facilitiesData?.map((data,index)=><FacilitiesCard key={index} data={data}/>)
                }
            </div>
        </div>
    );
};

export default OurFacilities;