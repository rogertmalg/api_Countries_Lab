import React, {useState} from "react";
import CountryItem from "./countryItem";

const CountryDetail = ({country, onFavSelected, favCountriesList}) => {
    
    if (!country) {
        return <h2>Please select a country too see more details</h2>
    }

    if (favCountriesList.find(favCountry => favCountry.name.common === country.name.common)) {
        return (
            <div class='component'>
            <h2>{country.name.common}</h2>
            <img src={country.flags.png} alt={country.name.official} />
            <br/>
            <p>Official Name: {country.name.official}</p>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population}</p>
            <a href={country.maps.googleMaps} target="_blank">Country Map</a> 
            </div>
        )
    }

        

    return (
        <div class='component'>
            <h2>{country.name.common}</h2>
            <img src={country.flags.png} alt={country.name.official} />
            <br/>
            <p>Official Name: {country.name.official}</p>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population}</p>
            <a href={country.maps.googleMaps} target="_blank">Country Map</a> 
            <br/>
            <button  class="button" onClick={ () => {onFavSelected(country) } }>&#11088;</button>
        
        </div>
    )
}

export default CountryDetail