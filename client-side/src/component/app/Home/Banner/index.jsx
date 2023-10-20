import React from 'react';
import BannerSlider from './BannerSlider';
import BannerBottom from './BannerBottom';

const Banner = () => {
    return (
        <div className='mt-4'>
          <BannerSlider/>
          <BannerBottom/>
        </div>
    );
};

export default Banner;