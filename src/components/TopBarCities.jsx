import React from 'react'

function TopBarCities({city,onChooseCity}) {
  return (
    <li>
        <button onClick={() => onChooseCity(city)}>{city}</button>
    </li>
  )
}

export default TopBarCities