import { loadCountries} from './components/Countries';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';

const continents = ['Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', 'Australia' ];

const countries = await loadCountries();


export function tiempoEn( city: String ) {
  return ReactDOM.createRoot(document.getElementById('root')).render(<WeatherView city={city}/>)

}


export  function countriesOf( continent: String ) {
  let html = [];
  for( const c of countries) {
    if(c.continents[0] == continent){
      html.push(
      <button><p>{c.name}</p>
              <p>{c.capitals}</p>
      </button>)
    } 
  }
  return html;
}  

export  function allContinents() {
  let html = [];
  for( const c of continents) {
    html.push(<button>{c}</button>)
  }
  return html;
} 


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { paises: countriesOf('Europ') };
  };
  handleClick = (e) =>{
    e.preventDefault();
    this.setState(prevState => ({ paises: countriesOf('Asia')}))
  }
  paisClick = (e) =>{
    e.preventDefault();
    this.setState(prevState => ({ paises: tiempoEn('Madrid') }))
  }
  render() {
    return (<>
              <h1>{this.state.paises.map(pais =><a href='#' onClick={this.paisClick}>{pais}</a> )}</h1>

              <a href='#' onClick={this.handleClick}>Asia</a>
              <p></p>
              <a href='#' onClick={this.handleClick}>Europ</a>

            </>
      );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>)

function WeatherView(city : String) {
  debugger
  const [details, setDetails] = useState([])

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=7620996b0816cbf84b12a072927f9f0f`)
    .then(result=>result.json())
      .then((details) => {
        setDetails(details)
      })
  }, [])
  return (
    <>
    <div>Este es el tiempo en</div>
    <div>{details.name}</div>
    </>
  );
}

//ReactDOM.createRoot(document.getElementById('root')).render(<ActionLink/>)
