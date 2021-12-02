import React, {useState, useEffect} from 'react';
import CountryList from '../components/countryList';
import CountryDetail from '../components/countryDetails';
import FavCountries from '../components/favCountries';

const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
    const [ selectedCountry, setSelectedCountry] = useState(null);
    const [ favCountriesList, setSelectedFavCountry] = useState([]);

    useEffect(() => {
      getCountries();
    }, []);

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    };
    
    const onCountrySelected = (country) => {
        setSelectedCountry(country);
    }

    const onFavSelected = (favCountry) => {
        setSelectedFavCountry([...favCountriesList, favCountry])
    }

    return (
        <div class='container'>
            <CountryList countries={countries} onCountrySelected={onCountrySelected}/>
            <CountryDetail country={selectedCountry} onFavSelected={onFavSelected}/>
            <FavCountries favCountriesList={favCountriesList} />
        </div>

        
    )
}

export default CountryContainer;