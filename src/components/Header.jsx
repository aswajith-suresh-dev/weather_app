import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
function Header({ weather, city, setCity, onSearch }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentTime(new Date());
  }, 60000);

  return () => clearInterval(interval);
}, []);
const cityTime = new Date(
  currentTime.getTime() + (weather?.timezone || 0) * 1000
);

const date = cityTime.toLocaleDateString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
  timeZone: "UTC",
});

const time = cityTime.toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZone: "UTC",
});
  return (
    <header className="w-full flex flex-col md:flex-row justify-between items-center gap-6 p-6 md:p-8">
      {/* Left Section */}
      <div className="header-left flex flex-col gap-6 w-full md:w-auto">
        {/* Logo */}
        <div className="header-logo flex items-center gap-2">
          <TiWeatherPartlySunny className="text-4xl text-orange-700" />
          <h1 className="text-2xl font-bold tracking-wide text-slate-900">
            SkyCast
          </h1>
        </div>

        {/* Location and Date */}
        <div className="place-date">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {weather && weather.name}
          </h2>

          <p className="text-sm text-slate-500 mt-2">
            {weather && `${date} | ${time}`}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="header-right flex items-center gap-3 w-full md:w-auto">
        {/* Search Input */}
        <div className="bg-white border border-slate-300 rounded-xl px-4 py-3 flex-1 md:w-64 focus-within:border-orange-700 focus-within:ring-2 focus-within:ring-orange-100 transition">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSearch()}
            className="w-full bg-transparent outline-none text-slate-900 placeholder:text-slate-500 text-sm"
          />
        </div>

        {/* Search Button */}
        <button
          onClick={onSearch}
          className="bg-orange-700 text-white px-5 py-3 rounded-xl font-medium flex items-center gap-2 hover:bg-orange-800 transition duration-200"
        >
          <FaSearch />
          <span>Search</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
