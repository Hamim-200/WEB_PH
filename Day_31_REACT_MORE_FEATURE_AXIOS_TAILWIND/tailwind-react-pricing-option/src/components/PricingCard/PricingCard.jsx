import React from 'react';

const PricingCard = ({pricing}) => {
    console.log(pricing)
    return (
        <div className='border p-4 bg-blue-500 rounded-2xl text-black'>
            <div>
               <div>
                <h1 className='text-3xl'>{pricing.name}</h1>
                <h1 className='text-1xl'>{pricing.price}</h1>
               </div>

               <div>
                    <p className='pt-4'>{pricing.description}</p>
               </div>
            </div>
        </div>
    );
};

export default PricingCard;