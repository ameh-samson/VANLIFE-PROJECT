import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const filteredType = searchParams.get("type");

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  // filters the van based on URL query
  const displayedVans = filteredType
    ? vans.filter((van) => van.type.toLowerCase() === filteredType)
    : vans;

  // vans replaced with displayedVans so as to ensured it is filtered
  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={`/vans/${van.id}`}
        aria-label={`View details for ${van.name},priced at $${van.price} per day`}
      >
        <img src={van.imageUrl} />
        <div className="van-info">
          <p className="heading">{van.name}</p>
          <p>
            ${van.price}
            <span className="duration">/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-section">
      <h1>Explore our van options</h1>
      <div className="van-list-grid">{vanElements}</div>
    </div>
  );
}
