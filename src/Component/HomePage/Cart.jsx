import React from 'react';
import { RxCross1 } from 'react-icons/rx';

const Cart = ({ carts }) => {
    console.log(carts);
    return (
        <div className='w-6/12 mx-auto'>
            <div className='py-20 space-y-10'>
                <h1 className='text-5xl font-bold'>Your Cart</h1>
                <div className='space-y-5'>
                    {carts.map((cart) => {
                        return (
                            <div
                                key={cart.id}
                                className='flex items-center gap-10 hover:border-red-500 border border-zinc-400 rounded-3xl p-5'>
                                <div className='h-25 w-25 flex overflow-hidden'>
                                    <img className='object-contain' src={cart.image} alt="" />
                                </div>
                                <div>
                                    <h1 className='text-2xl font-bold'>{cart.title}</h1>
                                    <p className='text-gray-400'>{cart.description}</p>
                                </div>
                                <div className='text-center w-30'>
                                    <p className='text-4xl font-bold'>${cart.price}</p>
                                    <p className=''>/per month</p>
                                </div>
                                <div>
                                    <RxCross1 className='text-2xl hover:text-red-500' />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='flex items-center justify-between p-8 bg-black rounded-3xl'>
                    <h2 className='text-white text-4xl font-bold'>Total</h2>
                    <p className='text-[#FB2C36] text-4xl font-bold'>$0</p>
                </div>
                <button className='bg-[#FB2C36] text-white text-2xl btn w-full py-8 rounded-2xl'>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;