import React from 'react';

const FacilitiesCard = ({data}) => {
    return (
        <div>
            <img className='h-72' src={data?.image} alt="" />
            <h4 className='text-xl font-semibold mt-4 mb-8'>{data?.name}</h4>

        </div>
    );
};

export default FacilitiesCard;