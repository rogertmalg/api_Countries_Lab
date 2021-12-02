import React from "react";

const FavCountryItem = ({favCountry}) => {
    return (
        <>
        <li id="favList"><img src={favCountry.flags.svg} alt={favCountry.name.official} width="150px"/></li>
        </>
    )
};

export default FavCountryItem;