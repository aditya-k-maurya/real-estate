"use client"
import { useState } from "react";
import "./searchBar.scss";

const types = ["buy", "rent"] as const; 

type QueryType = typeof types[number]; 

interface Query {
  type: QueryType;
  location: string;
  minPrice: number;
  maxPrice: number;
}

function SearchBar() {
  const [query, setQuery] = useState<Query>({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val: QueryType) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setQuery((prev) => ({
      ...prev,
      [name]: name === "minPrice" || name === "maxPrice" ? Number(value) : value,
    }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input
          type="text"
          name="location"
          placeholder="City Location"
          value={query.location}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          value={query.minPrice}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          value={query.maxPrice}
          onChange={handleInputChange}
        />
        <button type="submit">
          <img src="/search.png" alt="Search" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
