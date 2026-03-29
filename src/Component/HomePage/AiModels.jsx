import React, { use } from 'react';
import { FaFire, FaHeart, FaRegSadTear, FaRegStar } from "react-icons/fa";

const AiModels = ({ modelResponse }) => {
    const models = use(modelResponse);
    console.log(models)

    const statusConfig = {
        popular: {
            color: "bg-[#E7000B]",
            icon: <FaFire className='text-orange-300' />
        },
        favourite: {
            color: "bg-[#FF6900]",
            icon: <FaHeart className='text-red-500' />
        },
        mostwanted: {
            color: "bg-[#FE9A00]",
            icon: <FaRegStar />
        }
    }
    return (
        <div>
            <div className='w-8/12 mx-auto'>
                <div className='text-center'>
                    <button className='btn bg-linear-to-r from-pink-500 to-red-500 text-white rounded-full w-50'>Models</button>
                    <button className=' w-50 text-gray-400 hover:text-gray-900 ml-5'>Cart(0)</button>
                </div>
                <div className='my-10 text-center'>
                    <h1 className='text-5xl font-bold'>Choose Your AI Model</h1>
                    <p className='text-xl text-gray-500'>One subscription gives you access to all frontier AI models</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {models.map((model) => {
                        const current = statusConfig[model.status] || {
                            color: "bg-gray-400",
                            icon: <FaRegSadTear />
                        };
                        return <div key={model.id} className='border border-zinc-300 rounded-3xl overflow-hidden'>
                            <div className='bg-zinc-200 p-8 flex items-center justify-center h-60 relative'>
                                <img className='w-50' src={model.image} alt="" />
                                <div className={`badge ${current.color} border-none text-white absolute top-5 rounded-full right-5`}>
                                    {current.icon}
                                    { model.status?.toUpperCase()}</div>
                            </div>
                            <div className='p-5 space-y-5'>
                                <h1 className='text-2xl font-bold'>{model.title}</h1>
                                <p className='text-gray-400'>{model.description}</p>
                                <p className='text-2xl font-bold'>${model.price} <span className='text-sm text-gray-400'>/month</span></p>
                                <button className='btn w-full rounded-xl bg-[#E7000B] text-white py-7'>Subscribe Now</button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default AiModels;