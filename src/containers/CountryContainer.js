import React, {useState, useEffect} from 'react';
import CountryList from '../components/countryList';
import CountryDetail from '../components/countryDetails';
import FavCountries from '../components/favCountries';

const CountryContainer = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
      getCountries();
    }, []);

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    };
    
    return (
        <div>
            <h1>Countries</h1>
            <CountryList countries={countries}/>
            <CountryDetail/>
            <FavCountries/>
        </div>

        
    )
}

export default CountryContainer;