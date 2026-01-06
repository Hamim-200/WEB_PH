import React, { useState } from 'react';
import './Country.css'
const Country = ({ country, handlevisitedCountries }) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // if(visited === true){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        setVisited(!visited);
        handlevisitedCountries(country)
    }


    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h2>Name: {country.name.common} </h2>
            <h4>Official Name: {country.name.official} </h4>

            <img src={country.flags.png} alt="" />

            <p>Independent: {country.independent ? 'Free' : 'Not Free'}</p>

            <button onClick={handleVisited} className='btn'>{
                visited ? 'Visited' : 'Not Visited'
            }</button>
        </div>
    );
};

export default Country;