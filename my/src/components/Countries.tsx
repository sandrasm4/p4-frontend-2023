import React from "react";

export class Country {
    constructor(
        public capitals: String[],
        public continents: String[],
        public name: String,
        public population: number,
        public map: String
    ){};
}

export const loadCountries = async () => {
    const countries = await fetch("https://restcountries.com/v3.1/all").then(result=>result.json());
    const allCountries = countries.map( c => new Country(c.capital, c.continents, c.name.common, c.population, c.maps.googleMaps) )
    return allCountries;
} 

export const WelcomeAge = (users: Country) => {
    return <h1>tienes {users.name} años</h1>
}
