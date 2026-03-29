import React, { use } from 'react';
import ModelCart from './ModelCart';


const AiModels = ({ modelResponse }) => {
    const models = use(modelResponse);
    // console.log(models)

    
    return (
        <div>
            <div className='w-8/12 mx-auto mb-10'>
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
                       
                        return <div>
                        <ModelCart model={model}></ModelCart>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default AiModels;