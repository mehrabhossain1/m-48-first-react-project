import React from "react";
import "./Country.css";
const Country = (props) => {
  const { area, flags, population, capital, name, region } = props.country;
  return (
    <div className="country bg-warning">
      <h2>Name: {name.common}</h2>
      <img src={flags.png} alt="" />
      <h4>Capital: {capital}</h4>
      <p>Area: {area} square km</p>
      <p>
        <small>Population: {population}</small>
      </p>
      <p>
        <small>Region: {region}</small>
      </p>
    </div>
  );
};

export default Country;
