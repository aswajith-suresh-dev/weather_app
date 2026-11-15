function Forecast({ forecast }) {
  if (!forecast) return null;

  // 1. Extract all dates
  const dates = forecast.list.map(
    (item) => item.dt_txt.split(" ")[0]
  );

  // 2. Remove duplicate dates
const uniqueDates = [...new Set(dates)].slice(0, 5);
  // 3. Create daily forecast objects
  const forecastData = uniqueDates.map((date) => {

    // Get all forecast records belonging to this date
    const dailyRecords = forecast.list.filter(
      (item) => item.dt_txt.split(" ")[0] === date
    );

    // Extract minimum and maximum temperatures
    const minTemps = dailyRecords.map(
      (item) => item.main.temp_min
    );

    const maxTemps = dailyRecords.map(
      (item) => item.main.temp_max
    );

    // Calculate daily minimum and maximum
    const minTemp = Math.min(...minTemps);
    const maxTemp = Math.max(...maxTemps);

    // Select a representative forecast record
    const representativeRecord =
      dailyRecords[Math.floor(dailyRecords.length / 2)];

    // Return one object for this day
    return {
      date: date,

      day: new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
        weekday: "long"
      }),

      min: Math.round(minTemp),
      max: Math.round(maxTemp),

      condition: representativeRecord.weather[0].description,
      icon: representativeRecord.weather[0].icon
    };
  });

  console.log(forecastData);

  return (
    <section className="forecast-section mt-8">

      <h2 className="text-2xl font-bold text-slate-900 mb-5">
        5-Day Forecast
      </h2>

      <div className="forecast-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">

        {forecastData.map((day) => (
          <div
            key={day.date}
            className="forecast-card bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col items-center text-center"
          >
            <h3 className="font-semibold text-slate-800">
              {day.day}
            </h3>

            <img
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt={day.condition}
              className="w-20 h-20 object-contain"
            />

            <p className="text-sm text-slate-500">
              {day.condition}
            </p>

            <div className="flex gap-3 mt-4">
              <span className="font-semibold text-slate-900">
                {day.max}°
              </span>

              <span className="text-slate-500">
                {day.min}°
              </span>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Forecast;