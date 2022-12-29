
import './App.css';
import SearchCity from './components/Search/SeachCity';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';

function App() {

const handleOnSearchChange = (searchData)=>{
  console.log(searchData)
}

  return (
    <div className="container">
      <SearchCity
      onSearchChange={handleOnSearchChange}
       />
       <CurrentWeather />
    </div>
  );
}

export default App;
