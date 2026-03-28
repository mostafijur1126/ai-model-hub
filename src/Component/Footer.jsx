import React from 'react';
import footerLogo from '../assets/logo.png'

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='container mx-auto'> 
            <footer className=" footer sm:footer-horizontal text-base-content p-10">
                <aside>
                    <div className='flex items-center gap-3'>
                        <img className='w-20' src={footerLogo} alt="" />
                        <h2 className='text-white text-3xl font-bold'>AI Hub</h2>
                    </div>
                    <p className='text-gray-400'>
                        One subscription. Access to all frontier AI models in a <br /> single powerful platform.
                    </p>
                </aside>
                <nav>
                    <h6 className=" text-2xl text-[#F52B35]">Product</h6>
                    <a className="link link-hover text-gray-400">Models</a>
                    <a className="link link-hover text-gray-400">Pricing</a>
                    <a className="link link-hover text-gray-400">Features</a>
                    <a className="link link-hover text-gray-400">API</a>
                </nav>
                <nav>
                    <h6 className="text-2xl text-[#F52B35]">Company</h6>
                    <a className="link link-hover text-gray-400">About us</a>
                    <a className="link link-hover text-gray-400">Blog</a>
                    <a className="link link-hover text-gray-400">Careers</a>
                    <a className="link link-hover text-gray-400">Contact</a>
                </nav>
                <nav>
                    <h6 className="text-2xl text-[#F52B35]">Legal</h6>
                    <a className="link link-hover text-gray-400 ">Terms of use</a>
                    <a className="link link-hover text-gray-400">Privacy policy</a>
                    <a className="link link-hover text-gray-400">Cookie policy</a>
                </nav>
            </footer>
            <div>
                <div className="divider bg-gray-600 h-[1px] my-0"></div>
                <div className='flex justify-between py-5'>
                    <p className='text-gray-400'>© 2026 AI Hub. All rights reserved.</p>
                    <p className='text-gray-400 hover:text-[#F52B35] hover:cursor-pointer'>Made with ❤️ for Mostafij..</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;