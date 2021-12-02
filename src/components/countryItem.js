import React from "react";


const CountryItem = ({country}) => {
    return(
        <li>{country.name.common} - population: {country.population}</li>
    )
};


export default CountryItem;