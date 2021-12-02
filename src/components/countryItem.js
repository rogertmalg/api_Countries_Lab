import React from "react";


const CountryItem = ({country, onCountrySelected}) => {
    return(
        <li onClick={ () => {onCountrySelected(country) } }>{country.name.common}</li>
    )
};


export default CountryItem;