import './App.css';
import Main from './components/Main';

// const people = [
//   {"firstName":"Brooklyn", "lastName":"Battles", "age":2, "hairColor":"Black and White"},
//   {"firstName":"Solange", "lastName":"Knowles", "age":35, "hairColor":"Dark Brown"},
//   {"firstName":"Diahann", "lastName":"Carroll", "age":84, "hairColor":"Dark Brown"},
//   {"firstName":"Dorothy", "lastName":"Danridge", "age":42, "hairColor":"Dark Brown"}
// ]


function App() {
  return (
    <div className='App'>
      <Main firstName="Brooklyn" lastName="Battles" age={ 2 } hairColor="Black and White" />
      <Main firstName="Solange" lastName="Knowles" age={ 35 } hairColor="Dark Brown" />
      <Main firstName="Diahann" lastName="Carroll" age={ 84 } hairColor="Dark Brown" />
      <Main firstName="Dorothy" lastName="Danridge" age={ 42 } hairColor="Dark Brown" />
    </div>
  );
}

export default App;
