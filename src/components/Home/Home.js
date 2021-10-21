import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Home = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  });
  return (
    <div className="container">
      {countries.map((country) => (
        <Country country={country} key={country.id}></Country>
      ))}
    </div>
  );
};

export default Home;
