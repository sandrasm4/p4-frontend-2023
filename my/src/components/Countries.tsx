import React, { useState } from "react";
import { Link, useMatch } from "react-router-dom";

export class Country {
    constructor(
        public id: String,
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
    const allCountries = countries.map( c => new Country(c.id, c.capital, c.continents, c.name.common, c.population, c.maps.googleMaps) )
    return allCountries;
} 
const countries = await loadCountries();

export default class MainView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  continentes: allContinents, 
                      paises: countriesOf('Europe')};
    };
  
    continentClick = (continent, e) =>{
      e.preventDefault();
      this.setState(prevState => ({ paises: countriesOf(continent)}))
    }
    
    render() {
      return (<> <p id='titulo'>El tiempo en las capitaes del mundo</p>
                <div className="continentes">
                {this.state.continentes.map( c =>
                  <button className="continente" key={c.id} onClick={ (event) =>
                    this.continentClick( c , event )}>{c}</button>  
                )}</div>
                <br></br>
                <p>Clica una ciudad para ver que tiempo hace!</p>
                <br></br>
                <div className="paises">
                {this.state.paises.map( pais =>
                  <Link to={`weather/${pais.capitals}`} >
                    {pais.capitals?
                    <button className="pais" key = {pais.id} ><h1>{pais.capitals}</h1><h2>{pais.name}</h2></button> :
                    null
                    }
                  </Link> )}</div>
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


