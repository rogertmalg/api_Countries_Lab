import React from "react";
import FavCountryItem from "./favCountryItem";

const FavCountries = ({favCountriesList}) => {

    const starCountries = favCountriesList.map((favCountry, index) => {
        return <FavCountryItem favCountry={favCountry} key={index} />
    });

    return (
        <div class='component'>
            <h2>Favourite Countries</h2>
            <ul>
                {starCountries}
            </ul>
        </div>
    )
};

export default FavCountries;