import React, { useState } from "react";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [cocktails] = useState([
    "Margarita",
    "Blue Margarita",
    "Mojito",
    "Old Fashioned",
    "Whiskey Sour",
  ]);

  return (
    <div>
      <header>
        <SearchBar
          searchValue={searchValue}
          handleSearchValue={setSearchValue}
        />
      </header>
      {cocktails
        .filter((cocktail) => cocktail.includes(searchValue))
        .map((cocktail) => (
          <p>{cocktail}</p>
        ))}
    </div>
  );
}
