import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
//import { Welcome } from './components/Welcome';
//import { WelcomeAge } from './components/Welcome';
import { loadCountries} from './components/Countries';
import { loadWeather} from './components/Weather';
import { renderCapitals} from './components/Render';
//import axios from 'axios';

const continents = ['Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', 'Australia' ];

const countries = await loadCountries();

const city = 'London'
const weather = await loadWeather(city);




export  function Lista() {
  const listItems = countries.map(c =>
    <li>{c.capitals[0]}</li>
  );
    return <ul>{listItems}</ul>;
}

export  function LaLista( continent: String ) {
  let html = [];
  for( const c of countries) {
    if(c.continents[0] == continent){
      html.push(<button><p class="pais">{c.name}</p><p>{c.capitals}</p></button>)
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

/*ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ul>{html}</ul>
);*/

class TodosPaises extends React.Component {
  constructor(props) {
    super(props);
    this.state = {listContinents: LaLista('Europe')};
  }
  handleClick = (e) =>{
    e.preventDefault();
    console.log('Sandraa')
    this.setState(prevState => ({listContinents: LaLista('Europe')}))
  }
  render() {
    return (<>
      <p>arnau</p>
      <a href='#' onClick={this.handleClick}> Click me
      {this.state.listContinents && <TodosPaises/>} </a></>);
  }
  async componentDidMount(): Promise<void> {
    //const res = await axios.get("api")
    
    const filtrar = () => {this.setState({listContinents: LaLista('Europe')})}
    //this.timer = setInterval(filtrar, 1000)
  }
  componentDidUpdate(): void {

  }
}

class Asia extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rlistContinents: allContinents()};
  };
  handleClick = (e) =>{
    e.preventDefault();
    this.setState(prevState => ({listContinents: LaLista('Asia')}))
  }
  render() {
    return (<>
              <a href='#' onClick={this.handleClick}> Asia
              {this.state.listContinents} </a>
            </>
      );
  }
}
class Europe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rlistContinents: allContinents()};
  };
  handleClick = (e) =>{
    e.preventDefault();
    this.setState(prevState => ({listContinents: LaLista('Europe')}))
  }
  render() {
    return (<>
              <a href='#' onClick={this.handleClick}> Europa
              {this.state.listContinents}</a>
            </>
      );
  }
}

class ActionLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rlistContinents: allContinents()};
  };
  handleClick = (e) =>{
    e.preventDefault();
    this.setState(prevState => ({listContinents: allContinents()}))
  }
  render() {
    return (<>
      
      <a href='#' onClick={this.handleClick}>{<Asia/>}</a>
      <p></p>
      <a href='#' onClick={this.handleClick}>{<Europe/>}</a>
      </>
      );
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(<ActionLink/>)
//ReactDOM.createRoot(document.getElementById('root')).render(<TodosPaises color="red"/>)
/*ReactDOM.createR(document.getElementById('root') as HTMLElement).render(
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
