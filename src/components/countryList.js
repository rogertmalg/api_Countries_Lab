import React from "react";
import CountryItem from "./countryItem";
import WorldPop from "./WorldPop";

const CountryList = ({countries, onCountrySelected}) => {

    const CountriesItems = countries.map((country, index) => {
        return <CountryItem country={country} key={index} onCountrySelected={onCountrySelected} />
    })


    return (
        <div id="countryList" class='component'>
            <WorldPop countries={countries} />
            <ul>
                {CountriesItems}
            </ul>
        </div>


       
    )
};

export default CountryList;