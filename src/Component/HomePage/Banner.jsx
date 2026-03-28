import React from 'react';
import bannerImg from '../../assets/banner.png'
import { FaLongArrowAltRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='w-full max-w-7xl mx-auto px-4 py-10'>
            <div className='flex flex-col-reverse md:flex-row items-center gap-10'>
                <div className='flex-1 space-y-5 text-center md:text-left'>
                    <button className='p-3 px-8 border border-[#FF0000] bg-[#FEE9EA] rounded-full'>✨ Frontier AI Models</button>
                    <h1 className='text-[#E7000B] text-3xl md:text-5xl font-bold leading-tight'>One Subscription. <br />
                        <span>All the AIs You Need</span></h1>
                    <p className='text-base md:text-xl text-gray-600'>Experience the full spectrum of frontier intelligence — all the most advanced AI models, unified under a single, powerful subscription.</p>
                    <button className='btn bg-[#FB2C36] text-white rounded-xl'>Get Unlimited Access <FaLongArrowAltRight /></button>
                    <div className='flex flex-col sm:flex-row gap-3 sm:gap-7 text-sm md:text-base justify-center md:justify-start'>
                        <p>✓ 50+ Frontier Models</p>
                        <p>✓ No Usage Limits</p>
                        <p>✓ Cancel Anytime</p>
                    </div>
                </div>
                <div className='flex-1 flex justify-center md:justify-end'>
                    <img className='w-full max-w-sm md:max-w-md lg:max-w-lg animate-pulse' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;