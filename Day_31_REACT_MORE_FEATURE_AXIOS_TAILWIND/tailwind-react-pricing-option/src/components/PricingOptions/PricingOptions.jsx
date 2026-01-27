import React,{use} from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);

    return (
        <div>
            <h2 className='text-5xl m-7'>Get our Membership</h2>

            <div className='grid md:grid-cols-3 gap-3.5 m-8'>
                {
                pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;