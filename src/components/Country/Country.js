import React from "react";
import { Link } from "react-router-dom";

const Country = (props) => {
  const { name, email, id } = props.country;

  return (
    <div className="row">
      <div className="col-md-4">
        <h3>{name}</h3>
        <p>{email}</p>
        <Link to={`/users/${id}`}>
          <button className="btn btn-info">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Country;
