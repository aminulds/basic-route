import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const CountryDetails = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);
  const { name, username, phone, website } = user;
  return (
    <div>
      <h3>Users Details</h3>
      <p>Name: {name}</p>
      <p>UserName: {username}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <div>
        <Link to="/home">
          <button className="btn btn-info">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default CountryDetails;
