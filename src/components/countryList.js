import React from "react";
import CountryItem from "./countryItem";

const CountryList = ({countries}) => {

    const CountriesItems = countries.map((country, index) => {
        return <CountryItem country={country} key={index} />
    })


    return (
        <div>
            <ul>
                {CountriesItems}
            </ul>
        </div>


       
    )
};

export default CountryList;