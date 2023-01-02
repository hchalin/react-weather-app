import "./App.css";
import SearchCity from "./components/Search/SeachCity";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import { OPENWEATHER_API_URL, OPENWEATHER_API_KEY } from "./api";
import { useState } from "react";

function App() {
  const [currWeather, setCurrWeather] = useState(null)
  const [forecast, setForecast] = useState(null)


  const handleOnSearchChange = (searchData) => {
    // search here for the API data
 //searchData has lat and lon...
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${OPENWEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=imperial`
    );
    const forecastFetch = fetch(
      `${OPENWEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=imperial`
    );

    Promise.all([currentWeatherFetch, forecastFetch]).then(async (res) => {
      // first set of data from fetch
      const weatherRes = await res[0].json();
      //second set of data from fetch
      const forecastRes = await res[1].json();

      setCurrWeather({city: searchData.label, ...weatherRes})
      setForecast({city: searchData.label, ...forecastRes})
    })
    .catch((err)=>{
      console.log(err)
    })
  };




  return (
    <div className="container">
      <SearchCity onSearchChange={handleOnSearchChange} />
      {currWeather && <CurrentWeather data={currWeather}/>}
      {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
