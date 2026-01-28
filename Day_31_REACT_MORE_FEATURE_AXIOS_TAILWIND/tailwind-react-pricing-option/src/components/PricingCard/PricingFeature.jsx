import React from 'react';
import { CircleCheck } from 'lucide-react';


const PricingFeature = ({feature}) => {
    return (
        <div>
            <p className='flex mt-2'> <CircleCheck className='mr-2'></CircleCheck> {feature}</p>
        </div>
    );
};

export default PricingFeature;