import React, { use } from 'react';
import ModelCart from './ModelCart';


const AiModels = ({ modelResponse, carts, setCart }) => {
    const models = use(modelResponse);
   


    return (
        <div>
            <div className='w-8/12 mx-auto mb-10'>
                <div className='my-10 text-center'>
                    <h1 className='text-5xl font-bold'>Choose Your AI Model</h1>
                    <p className='text-xl text-gray-500'>One subscription gives you access to all frontier AI models</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {models.map((model) => {

                        return <div key={model.id}>
                            <ModelCart carts={carts} setCart={setCart} model={model}></ModelCart>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default AiModels;