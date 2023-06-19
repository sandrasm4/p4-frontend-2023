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


export const loadWeather = async ( city: String ) => {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ca&appid=7620996b0816cbf84b12a072927f9f0f`).then(result=>result.json());
    const weather = new Weather(result.name, result.main.temp, result.main.temp_max, result.main.temp_min, result.main.feels_like, result.main.humidity, result.weather[0].description, result.weather[0].icon);
    return weather;
} 
