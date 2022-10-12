import React from 'react';

const Banner = () => {
    return (
        <div className='bg-banner-img py-[100px] lg:py-[170px] bg-cover bg-no-repeat'>
            {/* <img className='h-[500px] w-full' src={banner} alt="" /> */}
            <div className='max-w-2xl lg:px-10 '>
                <h2 style={{ 'lineHeight': '1.5' }} className=' text-white font-bold  text-3xl md:text-4xl lg:text-5xl'>Give More and More quiz<br /> Build Better Confidence </h2>
                <p className='text-lg opacity-70 font-medium py-3 text-white'>Giving exam make a man confindaceable. He can justify himself giving & facing more and more exam. so learn more give more quiz and build up your confidence</p>
            </div>
        </div>
    );
};

export default Banner;