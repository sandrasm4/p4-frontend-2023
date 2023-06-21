import React, { useState } from "react";

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







/*export default class App extends React.Component {
// state variable "count"
 constructor(props) {
 super(props);
 this.state = { count: 0 }; }

 render() {
 return ( <div>
    <p>You clicked {this.state.count} times</p>
    <button onClick={() =>
    this.setState( prevState => ({count: prevState.count+1})) }>

    </button>
    <button onClick={() => this.setState(0)}>Reset</button>
    </div> );
    }
}*/

