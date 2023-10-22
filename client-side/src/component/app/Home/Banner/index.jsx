import React from 'react';
import BannerSlider from './BannerSlider';
import BannerBottom from './BannerBottom';

const Banner = () => {
    return (
        <div className='mt-4'>
          <BannerSlider/>
          <div className='hidden md:block'>
          <BannerBottom/>
          </div>
        </div>
    );
};

export default Banner;