import {
  WiHumidity,
  WiStrongWind,
  WiBarometer,
  WiDaySunny,
} from "react-icons/wi";

function CurrentWeather({ weather }) {
  console.log(weather);

  return (
    <div className="current-weather flex flex-col md:flex-row md:items-center justify-between gap-8 p-4 sm:p-6 md:p-8">

      {/* Left Section */}
      <div className="current-weather-left flex flex-col sm:flex-row items-center gap-4 sm:gap-6 min-w-0">

        <div className="weather-icon w-28 h-28 sm:w-36 sm:h-36 shrink-0">
          <img
            src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt={weather ? weather.weather[0].description : "Weather icon"}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="basic-data text-center sm:text-left">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900">
            {weather && `${weather.main.temp}°C`}
          </h1>

          <h2 className="text-lg sm:text-xl font-semibold text-slate-700 mt-2">
            {weather && weather.weather[0].description}
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            {weather && `Feels like ${weather.main.feels_like}°C`}
          </p>
        </div>

      </div>

      {/* Right Section */}
      <div className="current-weather-right w-full md:flex-1 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-6">

        <h3 className="text-xl font-semibold text-slate-900 mb-5">
          Weather Details
        </h3>

        <div className="detail-data grid grid-cols-2 gap-5">

          {/* Humidity */}
          <div className="flex items-center gap-3 min-w-0">
            <WiHumidity className="text-3xl text-orange-700 shrink-0" />
            <div>
              <p className="text-sm text-slate-500">Humidity</p>
              <h4 className="text-lg font-semibold text-slate-800">
                {weather && `${weather.main.humidity}%`}
              </h4>
            </div>
          </div>

          {/* Wind Speed */}
          <div className="flex items-center gap-3 min-w-0">
            <WiStrongWind className="text-3xl text-orange-700 shrink-0" />
            <div>
              <p className="text-sm text-slate-500">Wind Speed</p>
              <h4 className="text-lg font-semibold text-slate-800">
                {weather && `${(weather.wind.speed * 3.6).toFixed(1)} km/h`}
              </h4>
            </div>
          </div>

          {/* Pressure */}
          <div className="flex items-center gap-3 min-w-0">
            <WiBarometer className="text-3xl text-orange-700 shrink-0" />
            <div>
              <p className="text-sm text-slate-500">Pressure</p>
              <h4 className="text-lg font-semibold text-slate-800">
                {weather && `${weather.main.pressure} hPa`}
              </h4>
            </div>
          </div>

          {/* Visibility */}
          <div className="flex items-center gap-3 min-w-0">
            <WiDaySunny className="text-3xl text-orange-700 shrink-0" />
            <div>
              <p className="text-sm text-slate-500">Visibility</p>
              <h4 className="text-lg font-semibold text-slate-800">
                {weather && `${weather.visibility / 1000} km`}
              </h4>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default CurrentWeather;