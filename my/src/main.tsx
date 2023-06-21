import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
//import { Welcome } from './components/Welcome';
//import { WelcomeAge } from './components/Welcome';
import { loadCountries} from './components/Countries';
import { loadWeather} from './components/Weather';
import { renderCapitals} from './components/Render';

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
      html.push(<button>{c.name}</button>)
    } 
  }
  return html;
}  

/*ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ul>{html}</ul>
);*/

class TodosPaises extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lista: LaLista('Europe')};
  }
  render() {
    return (<>
      <h1 style={{color: this.props.color}}>Sandraa</h1>
      <h2>{this.state.lista}</h2>
    </>);
  }
  componentDidMount(): void {
    const filtrar = () => {this.setState({lista: LaLista('Asia')})}
    this.timer = setInterval(filtrar, 1000)
  }
  componentDidUpdate(): void {
    clearInterval(this.timer)
  }
}
  
 
  
ReactDOM.createRoot(document.getElementById('root')).render(<TodosPaises color="red"/>)

/*class ActionLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { relojVisible: false};
  };
  handleClick = (e) =>{
    e.preventDefault();
    this.setState(prevState => ({relojVisible: !prevState.relojVisible}))
  }
  render() {
    return (
      <a href='#' onCick={this.handleClick}> Click me
      {this.state.relojVisible && <Clock/>} </a>
      );
  }
}
*/
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
