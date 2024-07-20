import ForecastType from "./ForecastType";

export default function ForeCast({ foreCastData, formattedLocalTime }) {
  const dailyForecast = foreCastData.map((item) => {
    const date = item.date;
    const temp = item.day.maxtemp_c;
    const imgUrl = item.day.condition.icon;
    const d = new Date(date);
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayName = weekday[d.getDay()];

    return {
      day: dayName,
      temp: Math.trunc(temp),
      imgUrl: imgUrl,
    };
  });

  const totalHourlyForecast = foreCastData[0].hour;
  let count = 0;
  const hourlyForecast = [];

  totalHourlyForecast.forEach((hr) => {
    const hrTime = Number(hr.time.split(" ")[1].split(":")[0]);
    if (Number(formattedLocalTime) < hrTime && count < 3) {
      const timeFormatted = hr.time.split(" ")[1];
      const temp = hr.temp_c;
      const imgURL = hr.condition.icon;
      hourlyForecast.push({
        day: timeFormatted,
        temp: Math.trunc(temp),
        imgUrl: imgURL,
      });
      count += 1;
    }
  });

  return (
    <div className="forecast">
      <h2 className="border-b">Hourly Forecast</h2>
      <ForecastType
        className="hourly-forecast"
        forecastTypeData={hourlyForecast}
      />
      <h2 className="border-b">Daily Forecast</h2>
      <ForecastType
        className="daily-forecast"
        forecastTypeData={dailyForecast}
      />
    </div>
  );
}
