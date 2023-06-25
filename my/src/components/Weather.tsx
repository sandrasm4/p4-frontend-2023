import React, { useEffect, useState } from "react";
import { MY_TOKEN } from "./config";
import axios from "axios";
import { useParams } from "react-router-dom";

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

export default function WeatherView() {
    const {city} = useParams();
    debugger
    const [details, setDetails] = useState({})
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${MY_TOKEN}`);
        const weather = new Weather(result.data.name, result.data.main.temp, result.data.main.temp_max, result.data.main.temp_min, result.data.main.feels_like, result.data.main.humidity, result.data.weather[0].description, result.data.weather[0].icon);
      
        setDetails(weather)
      }       
      fetchData();
    }, [])
    debugger
    return (
        <>
            <div>Este es el tiempo en {details.cityName}</div>
            <div>La temperatura es de {details.temp}</div>
            <div>La temperatura minima es de {details.tempMin}</div>
            <div>La temperatura maxima es de {details.tempMax}</div>
        </>
    ); 
}
