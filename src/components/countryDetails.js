import React from "react";
import CountryItem from "./countryItem";

const CountryDetail = ({country, onFavSelected}) => {

    if (!country) {
        return <h2>Please select a country too see more details</h2>
    }
    return (
        <div class='component'>
            <h2>{country.name.official}</h2>
            <img src={country.flags.png} alt={country.name.official} />
            <br/>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population}</p>
            <a href={country.maps.googleMaps} target="_blank">Country Map</a> 
            <br/>
            <button  class="button" onClick={ () => {onFavSelected(country) } }>Add to Favourites</button>
        
        </div>
    )
}

export default CountryDetail