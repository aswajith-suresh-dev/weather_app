import {
  WiHumidity,
  WiStrongWind,
  WiBarometer,
  WiDaySunny,
} from "react-icons/wi";
function CurrentWeather({weather}) {

    console.log(weather)
  return (
    <div className="current-weather items-center flex flex-col md:flex-row justify-between gap-8 p-6 md:p-8  ">
      {/* Left Section */}
      <div className="current-weather-left flex items-center gap-6 min-w-0">
        <div className="weather-icon w-40 h-40">
          <img
  src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
  alt={weather ? weather.weather[0].description : "Weather icon"}
  className="w-36 h-36 object-contain"
/>{" "}
        </div>

        <div className="basic-data">
          <h1 className="text-6xl font-bold text-slate-900">{weather && `${weather.main.temp}°C`}</h1>

          <h2 className="text-xl font-semibold text-slate-700 mt-2">{weather && weather.weather[0].description}</h2>

          <p className="text-sm text-slate-500 mt-1">{weather && `Feels like ${weather.main.feels_like}°C`}</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="current-weather-right flex-1 border-l border-slate-100 pl-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-5">
          Weather Details
        </h3>

        <div className="detail-data grid grid-cols-2 gap-5">
          <div className="flex items-center gap-3">
            <WiHumidity className="text-3xl text-orange-700" />
            <div>
              <p className="text-sm text-slate-500">Humidity</p>
              <h4 className="text-lg font-semibold text-slate-800">{weather && `${weather.main.humidity}%`}</h4>
            </div>
          </div>


          <div className="flex items-center gap-3">
            <WiStrongWind  className="text-3xl text-orange-700" />
            <p className="text-sm text-slate-500">Wind Speed</p>
            <h4 className="text-lg font-semibold">{weather && `${(weather.wind.speed * 3.6).toFixed(1)} km/h`}</h4>
          </div>

          <div className="flex items-center gap-3">
            <WiBarometer className="text-3xl text-orange-700"/>
            <p className="text-sm text-slate-500">Pressure</p>
            <h4 className="text-lg font-semibold">{weather && `${weather.main.pressure} hpa`} </h4>
          </div>

          <div className="flex items-center gap-3">
              <WiDaySunny className="text-3xl text-orange-700"/>

            <p className="text-sm text-slate-500">Visibility</p>
            <h4 className="text-lg font-semibold">{weather && `${weather.visibility / 1000} km`}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
