import { useState } from "react";
import TopBarCities from "./TopBarCities";
import { IoIosSearch } from "react-icons/io";
const cities = ["London", "Sydney", "Tokyo", "Paris", "Toronto"];

export default function TopBar({ onChooseCity }) {
  const [inputChange, setInputChange] = useState("");

  return (
    <div className="top-bar">
      <ul className="cities">
        {cities.map((city) => {
          return (
            <TopBarCities city={city} key={city} onChooseCity={onChooseCity} />
          );
        })}
      </ul>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="search by city..."
          className="search-box"
          value={inputChange}
          onChange={(e) => setInputChange(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            if (inputChange.trim() != "") onChooseCity(inputChange);
            setInputChange("");
          }}
        >
          <IoIosSearch style={{ fontSize: "22px", color: "white" }} />
          {/* &#128269; */}
        </button>
      </div>
    </div>
  );
}
