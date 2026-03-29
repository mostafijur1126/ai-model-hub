import React, { useState } from 'react';
import { FaFire, FaHeart, FaRegSadTear, FaRegStar } from "react-icons/fa";

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

const ModelCart = ({ model,carts, setCart }) => {
    const current = statusConfig[model.status] || {
        color: "bg-gray-400",
        icon: <FaRegSadTear />
    };
    const [isSubscribe, setIsSubscribe] = useState(false);
    // console.log(isSubscribe);


    const handelSubscribtion =() =>{
        setIsSubscribe(!isSubscribe);
        setCart([...carts, model]);
    }
    return (

        <div>
            <div key={model.id} className='border border-zinc-300 rounded-3xl overflow-hidden shadow-xl'>
                <div className='bg-zinc-200 p-8 flex items-center justify-center h-60 relative'>
                    <img className='w-50' src={model.image} alt="" />
                    <div className={`badge ${current.color} border-none text-white absolute top-5 rounded-full right-5`}>
                        {current.icon}
                        {model.status?.toUpperCase()}</div>
                </div>
                <div className='p-5 space-y-5'>
                    <h1 className='text-2xl font-bold'>{model.title}</h1>
                    <p className='text-gray-400'>{model.description}</p>
                    <p className='text-2xl font-bold'>
                        {model.price ? (
                            <>
                                ${model.price}<span className='text-sm text-gray-400'>/month</span>
                            </>
                        ) : (<span className='text-green-500'> Free </span>)}

                    </p>
                    <button
                        onClick={handelSubscribtion}
                        className={`btn w-full rounded-xl ${isSubscribe ? "bg-green-500" : "bg-[#E7000B]"}  text-white py-7`}>
                        { isSubscribe ? "Subscribed" : "Subscribe Now"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModelCart;