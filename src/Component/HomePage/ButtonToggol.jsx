import React from 'react';

const ButtonToggol = ({setActiveTab}) => {
    return (
        <div>
            {/* name of each tab group should be unique */}
                <div className="tabs tabs-box justify-center bg-transparent gap-5">
                    <input
                    onClick={()=>setActiveTab("models")} 
                    type="radio" 
                    name="my_tabs_1"
                    defaultChecked className="tab w-50 rounded-full" 
                    aria-label="Models" 
                    />
                    <input 
                    onClick={()=>setActiveTab("cart")}
                    type="radio" 
                    name="my_tabs_1" 
                    className="tab w-50 rounded-full" aria-label="Cart(0)"  
                    />
                </div>
        </div>
    );
};

export default ButtonToggol;