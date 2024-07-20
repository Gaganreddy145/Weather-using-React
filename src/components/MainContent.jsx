import ForeCast from "./Forecast";
import SunInfo from "./SunInfo";
import { WiHumidity } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";
export default function MainContent({ mainContentData }) {
  if (!mainContentData) return;
  let totalData = mainContentData;

  const sunInfo = {
    sunRise: totalData.forecast.forecastday[0].astro.sunrise,
    sunSet: totalData.forecast.forecastday[0].astro.sunset,
    maxTemp: totalData.forecast.forecastday[0].day.maxtemp_c,
    minTemp: totalData.forecast.forecastday[0].day.mintemp_c,
  };

  const foreCastData = totalData.forecast.forecastday;

  const m = {
    cityName: totalData.location.name,
    countryName: totalData.location.country,
    localTime: totalData.location.localtime,
    temperature: totalData.current.temp_c,
    windSpeed: totalData.current.wind_kph,
    humidity: totalData.current.humidity,
    feelLike: totalData.current.feelslike_c,
    condition: totalData.current.condition.text,
    conditionIcon: totalData.current.condition.icon,
  };

  const {
    condition,
    conditionIcon,
    temperature,
    feelLike,
    humidity,
    windSpeed,
    localTime,
    countryName,
    cityName,
  } = m;

  const dateOfLocalTime = localTime.substring(0, 10);
  const formattedLocalTime = localTime.split(" ")[1];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date(dateOfLocalTime);
  let monthName = month[d.getMonth()];
  let fullYear = d.getFullYear();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayName = weekday[d.getDay()];

  return (
    <div className="main-content">
      <div className="location-info">
        <p className="date-time">
          {dayName}, {d.getDate()} {monthName} {fullYear} | Local time:{" "}
          {formattedLocalTime}{" "}
        </p>
        <h1>
          {cityName} , {countryName}
        </h1>
        <p className="weather-condition">{condition}</p>
        <div className="flx">
          <img src={conditionIcon} alt={condition} />

          <div className="temperature">
            <span>{temperature}&#176;</span>
          </div>
          <div className="additional-info">
            <div className="info-item">
              <WiThermometer />
              <p>Real Feel: {feelLike}&#176;</p>
            </div>
            <div className="info-item">
              <WiHumidity />
              <p>Humidity: {humidity}%</p>
            </div>
            <div className="info-item">
              <WiStrongWind />
              <p>Wind: {windSpeed} km/h</p>
            </div>
          </div>
        </div>
      </div>
      <SunInfo sunInfo={sunInfo} />
      <ForeCast
        foreCastData={foreCastData}
        formattedLocalTime={formattedLocalTime.split(":")[0]}
      />
    </div>
  );
}
