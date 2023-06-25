import React, { useState } from "react";
import { Link, useMatch } from "react-router-dom";

export class Country {
    constructor(
        public capitals: String[],
        public continents: String[],
        public name: String,
        public population: number,
        public map: String
    ){};
}

const allContinents = ['Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', 'Oceania' ];

export const loadCountries = async () => {
    const countries = await fetch("https://restcountries.com/v3.1/all").then(result=>result.json());
    const allCountries = countries.map( c => new Country(c.capital, c.continents, c.name.common, c.population, c.maps.googleMaps) )
    return allCountries;
} 
const countries = await loadCountries();

export default class MainView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  continentes: allContinents, 
                      paises: countriesOf('Europe'),
                      tiempo: null};
    };
  
    continentClick = (continent, e) =>{
      e.preventDefault();
      this.setState(prevState => ({ paises: countriesOf(continent)}))
    }
    
    render() {
      return (<> 
                <h1>{this.state.continentes.map( c =>
                  <a href='#' onClick={ (event) =>
                      this.continentClick( c , event )}>
                    <button key={c.id}>{c}</button>
                  </a> )}
                </h1>
                <h2>{this.state.paises.map( pais =>
                  <Link to={`weather/${pais.capitals}`} >
                    <button><h1>{pais.name}</h1><h2>{pais.capitals}</h2></button>
                  </Link> )}
                </h2>
              </>
        );
    }
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


