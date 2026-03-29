import React, { use } from 'react';
import ModelCart from './ModelCart';


const AiModels = ({ modelResponse }) => {
    const models = use(modelResponse);
    // console.log(models)


    return (
        <div>
            <div className='w-8/12 mx-auto mb-10'>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-box justify-center bg-transparent gap-5">
                    <input type="radio" name="my_tabs_1"defaultChecked className="tab w-50 rounded-full" aria-label="Models" />
                    <input type="radio" name="my_tabs_1" className="tab w-50 rounded-full" aria-label="Cart(0)"  />
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