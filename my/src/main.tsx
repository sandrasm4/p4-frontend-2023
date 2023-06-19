import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
//import { Welcome } from './components/Welcome';
//import { WelcomeAge } from './components/Welcome';
import { WelcomeAge, loadCountries} from './components/Countries';
import { loadWeather} from './components/Weather';
import { renderCapitals} from './components/Render';

const continents = ['Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', 'Australia' ];

const countries = await loadCountries();

const city = 'London'
const weather = await loadWeather(city);

let html = '';

for( const c of countries) {
 // html += `<WelcomeAge name=${c.name} capital=${c.capitals} continents=${c.continents} population=${c.population} map=${c.map}/>`

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
    <WelcomeAge name={c.name} capitals={c.capitals} continents={c.continents} population={c.population} map={c.map}/>
    </>
  );
}



/*ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <div className='estilo1'>
      <h1>
        Hola {getFullName(aUser)}
        <p>Que tal {a ? "vas" : "estas"} ?</p>
      </h1>
      <ul>{lista}</ul>
      <ul>{lista2.map( ( elem , idx ) => <li key = {idx}>{elem}</li>)}</ul>
    </div>
    <div> He utilizado la sintaxis corta de {"<React.fragment></>"} para renderizar dos divs independientes</div>
    
    <Welcome name="Camilo"/>
    <WelcomeAge age="25"/>
  </>


  const aUser = {
  name: "sandra",
  surname: "soria"
}

const a = false;

function getFullName(user: any) {
  return `${user.name} ${user.surname}`;
}

const lista = [<li key = '1'>Primero</li>, <li key = '2'>Segundo</li>, <li key = 'c'>Tercero</li>];

const lista2 = ['Sandra', 'Esther'];

*/
