import React from "react";
import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";
import { FaTemperatureHigh } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function SunInfo({ sunInfo }) {
  const { sunRise, sunSet, maxTemp, minTemp } = sunInfo;

  return (
    <div className="sun-info">
      <div className="info-item">
        <GiSunrise />
        <p>Rise: {sunRise}</p>
      </div>
      <div className="info-item">
        <GiSunset />
        <p>Set: {sunSet}</p>
      </div>
      <div className="info-item">
        <FaTemperatureHigh />
        <p>High: {maxTemp}&#176;</p>
      </div>
      <div className="info-item">
        <AiOutlineArrowDown />
        <p>Low: {minTemp}&#176;</p>
      </div>
    </div>
  );
}
