import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import Header from "../components/Header";
import { useEffect, useState } from "react";

function WeatherDashboard() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState("");
const [error, setError] = useState("");
  // Fetch current weather
  async function fetchWeather(cityName) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();
      if (!response.ok) {
  throw new Error(data.message);
}
      setWeather(data);
    } catch (err) {
      console.log("Error fetching weather:", err);
        setError(err.message);
    }
  }

  // Fetch 5-day forecast
  async function fetchForecast(cityName) {

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    setForecast(data);
  } catch (err) {
    setError(err.message);
    console.log("Error fetching forecast:", err);
  }
}

  // Fetch both weather and forecast
  function fetchCityData(cityName) {
    fetchWeather(cityName);
    fetchForecast(cityName);
  }

  // Initial API calls
  useEffect(() => {
    fetchCityData("London");
  }, []);

  // Search button handler
  function handleSearch() {
    const trimmedCity = city.trim();

    if (trimmedCity === "") return;
setError("");
setWeather(null);
setForecast(null);


    fetchCityData(trimmedCity);
    setCity("");
  }

  return (
    <main className="min-h-screen bg-stone-50 px-4 py-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-8">

          <Header
            weather={weather}
            city={city}
            setCity={setCity}
            onSearch={handleSearch}
          />
{error && (
  <p className="text-red-600 text-center text-sm">
    {error}
  </p>
)}
          <CurrentWeather weather={weather} />

          <Forecast forecast={forecast} />

        </div>
      </div>
    </main>
  );
}

export default WeatherDashboard;