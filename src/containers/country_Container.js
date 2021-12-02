import React from 'react';
import CountryList from '../components/countryList';
import CountryDetail from '../components/countryDetails';
import FavCountries from '../components/favCountries';

const CountryContainer = () => {
    return (
        <div>
            <h1>Countries</h1>
            <CountryList/>
            <CountryDetail/>
            <FavCountries/>
        </div>

        
    )
}

export default CountryContainer;