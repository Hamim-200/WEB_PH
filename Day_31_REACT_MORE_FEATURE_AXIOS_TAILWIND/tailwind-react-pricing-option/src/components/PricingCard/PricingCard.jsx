import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
    const { name, price, description, features } = pricing

    return (
        <div className=' flex flex-col border p-4 bg-blue-500 rounded-2xl text-black'>
            <div>
                <h1 className='text-3xl'>{name}</h1>
                <h1 className='text-1xl'>{price}</h1>
            </div>

            <div className='pt-2'>
                <p className='p-4 bg-blue-700 rounded-2xl mt-10 flex-1'>{description}</p>
                {
                    features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn w-full mt-4">Subscribe</button>

        </div>
    );
};

export default PricingCard;