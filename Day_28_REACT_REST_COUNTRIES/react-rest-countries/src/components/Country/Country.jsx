import React from 'react';
import './Country.css'
const Country = ({ country }) => {
    const handleVisited = () =>{
        console.log('Visited Clicked')
    }


    return (
        <div className='country'>
            <h2>Name: {country.name.common} </h2>
            <h4>Official Name: {country.name.official} </h4>

            <img src={country.flags.png} alt="" />

            <p>Independent: {country.independent ? 'Free' : 'Not Free'}</p>

            <button onClick={handleVisited} className='btn'>Not Visited</button>
        </div>
    );
};

export default Country;