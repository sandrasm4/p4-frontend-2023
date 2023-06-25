import { loadCountries} from './components/Countries';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import { Weather } from './components/Weather';

const continents = ['Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', 'Oceania' ];

const countries = await loadCountries();


export function tiempoEn( city: String ) {
  return ReactDOM.createRoot(document.getElementById('root')).render(<WeatherView city={city}/>)

}

export  function countriesOf( continent: String ) {
  let paises = [];
  for( const c of countries) {
    if(c.continents[0] == continent){
      paises.push(c)
    } 
  }
  return paises;
}  

export  function allContinents() {
  let continentes = [];
  for( const c of continents) {
    continentes.push(c)
  }
  return continentes;
} 


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { paises: allContinents() };
  };

  continentClick = (continent, e) =>{
    debugger
    e.preventDefault();
    this.setState(prevState => ({ paises: 
      ReactDOM.createRoot(document.getElementById('root')).render(<Countries continent={continent}/>)}))
  }
  
  render() {
    return (<> 
              {this.state.paises.map( c =>
                <a href='#' onClick={ (event) =>
                    this.continentClick( c , event )}>
                  <button key={c.id}>{c}</button>
                </a> )}
            </>
      );
  }
}

class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = { paises: allContinents() };
  };

  paisClick = (city, e) =>{
    e.preventDefault();
    this.setState(prevState => ({ paises: tiempoEn(city) }))
  }
  render() {
    return (<>              
              <h2>{countriesOf(this.props.continent).map( pais =>
                <a href='#' onClick={ (event) => 
                  this.paisClick(pais.capitals, event )}>
                  <button><h1>{pais.name}</h1><h2>{pais.capitals}</h2></button>
                </a> )}
              </h2>
            </>
      );
  }
}

function WeatherView1(city : String) {

  const [details, setDetails] = useState([])

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=7620996b0816cbf84b12a072927f9f0f`)
    .then(result=>result.json())
      .then((details) => {
        setDetails(details)
      })
  }, [])
  return (
    [<>
    <div>Este es el tiempo en</div>
    <div>{details.name}</div>
    <div>La temperatura es de</div>
    <div>{details.temp}</div>
    <div>La temperatura minima es de {details.tempMin}</div>
    <div>La temperatura maxima es de {details.tempMax}</div>
    </>]
  );
}

function WeatherView(city : String) {

  const [details, setDetails] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=7620996b0816cbf84b12a072927f9f0f`);
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

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>)
