import React from 'react';

const Banner = () => {
    return (
        <div className='bg-banner-img py-[100px] lg:py-[200px] bg-cover bg-no-repeat'>
            {/* <img className='h-[500px] w-full' src={banner} alt="" /> */}
            <h2 style={{ 'lineHeight': '1.6' }} className=' text-white font-bold px-5 text-3xl md:text-4xl lg:text-5xl lg:px-10'>Give More and More quiz<br /> Buid Heights Marks </h2>
        </div>
    );
};

export default Banner;