import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const filteredType = searchParams.get("type");

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      const data = await getVans();
      setVans(data);
      setLoading(false);
    }

    loadVans();
  }, []);

  // filters the van based on URL query
  const displayedVans = filteredType
    ? vans.filter((van) => van.type.toLowerCase() === filteredType)
    : vans;

  // vans replaced with displayedVans so as to ensured it is filtered
  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={`${van.id}`}
        state={{ search: `?${searchParams.toString()}`, type: filteredType }}
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

  // initialize the loading state
  if (loading) {
    return <h1 className="van-loading">Loading...</h1>;
  }

  return (
    <div className="van-list-section">
      <h1>Explore our van options</h1>

      <div className="van-list-filter-buttons">
        <button
          onClick={() => setSearchParams({ type: "simple" })}
          className={`van-type simple ${
            filteredType === "simple" ? "selected" : ""
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className={`van-type luxury ${
            filteredType === "luxury" ? "selected" : ""
          }`}
        >
          Luxury
        </button>
        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className={`van-type rugged ${
            filteredType === "rugged" ? "selected" : ""
          }`}
        >
          Rugged
        </button>

        {filteredType ? (
          <button
            onClick={() => setSearchParams({})}
            className="van-type clear-filters"
          >
            Clear filter
          </button>
        ) : null}
      </div>

      <div className="van-list-grid">{vanElements}</div>
    </div>
  );
}
