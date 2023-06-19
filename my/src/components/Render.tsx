import React from "react";

export class Weather {
    constructor(
        public cityName: String,
        public temp: number,
        public tempMax: number,
        public tempMin: number,
        public feelsLike: number,
        public humidity: number,
        public description: String,
        public icon: String
    ){};
}

export class Country {
    constructor(
        public capital: String[],
        public continents: String[],
        public name: String,
        public population: number,
        public map: String
    ){};
}

export const loadCountries = async () => {

    const countries = await fetch("https://restcountries.com/v3.1/all").then(result=>result.json());
    const allCountries = countries.map( c => new Country(c.capital, c.continents, c.name.common, c.population, c.maps.googleMaps) )
    debugger
    return allCountries;
} 



export const loadWeather = async ( city: String ) => {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ca&appid=7620996b0816cbf84b12a072927f9f0f`).then(result=>result.json());
    const weather = new Weather(result.name, result.main.temp, result.main.temp_max, result.main.temp_min, result.main.feels_like, result.main.humidity, result.weather[0].description, result.weather[0].icon);
    debugger
    return weather;
} 

/*export const renderIndex = (receta: Weather) => {
    return <h1>{receta.main} Yooo</h1>;
};*/