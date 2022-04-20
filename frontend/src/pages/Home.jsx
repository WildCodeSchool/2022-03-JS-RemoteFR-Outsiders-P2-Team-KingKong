import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ShowCocktail from "../components/ShowCocktail";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Home() {
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
      <main>
        <SearchBar
          searchValue={searchValue}
          handleSearchValue={setSearchValue}
        />
        {cocktails
          .filter((cocktail) => cocktail.includes(searchValue))
          .map((cocktail) => (
            <p>{cocktail}</p>
          ))}
        <Card />
        <ShowCocktail />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
