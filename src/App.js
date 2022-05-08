
import './App.css';
import Weather  from './Weather'


export default  function App() {
  return (
    <div className="App">
      <h1> 
          
      </h1>
      <div className='container'>
       <Weather defaultCity="Tehran"/>
      <footer>
      This Project was coded by Masoumeh Salami and 
      <br/>
      is located in 
      <a href='https://github.com/masoumehsalami/react-weather-app'>
       Git Source
      </a>
      </footer>
      </div>
    </div>
  );
}


