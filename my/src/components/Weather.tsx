import React from "react";
import { MY_TOKEN } from "./config";

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

export const loadWeather = async ( city: String ) => {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${MY_TOKEN}`).then(result=>result.json());
    //'https://openweathermap.org/data/2.5/weather?id=3117735&appid=439d4b804bc8187953eb36d2a8c26a02'
    const weather = new Weather(result.name, result.main.temp, result.main.temp_max, result.main.temp_min, result.main.feels_like, result.main.humidity, result.weather[0].description, result.weather[0].icon);
    return weather;
} 
