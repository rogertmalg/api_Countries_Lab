import React from "react";

const WorldPop = ({countries}) => {

    const popList = countries.map((country) => {
        return country.population
    });

    const totalPop = popList.reduce((population, element) => population + element, 0);


    return (
        <h2>Total World Population: {totalPop}</h2>
    )
}

export default WorldPop; 