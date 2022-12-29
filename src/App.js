import "./App.css";
import SearchCity from "./components/Search/SeachCity";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import { OPENWEATHER_API_URL, OPENWEATHER_API_KEY } from "./api";

function App() {
  const [currWeather, setCurrWeather] =

  const handleOnSearchChange = (searchData) => {
    // search here for the API data
    console.log(searchData);
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${OPENWEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}`
    );
    const forecastFetch = fetch(
      `${OPENWEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch]).then(async (res) => {
      const weatherRes = await res[0].json;
      const forecastRes = await res[1].json;
    });
  };

  return (
    <div className="container">
      <SearchCity onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
