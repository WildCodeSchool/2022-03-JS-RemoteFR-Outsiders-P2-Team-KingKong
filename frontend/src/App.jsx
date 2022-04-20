import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useState } from "react";
import Random from "@pages/Random";
import PopularCocktail from "@pages/PopularCocktail";
import Banner from "@components/Banner";
import Home from "@pages/Home";
import SearchBar from "@components/SearchBar";
import "@assets/navbar.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [cocktails] = useState(["Margarita", "Mojito"]);
  return (
    <div>
      <Banner />
      <Router>
        <div>
          <div className="full-navigation">
            <nav className="navigation">
              <ul className="navigation-bar">
                <li className="navigation-name">
                  <Link to="/">Home</Link>
                </li>
                <li className="navigation-name">
                  <Link to="/random">Random Cocktail</Link>
                </li>
                <li className="navigation-name">
                  <Link to="/popularcocktail">Popular Cocktail</Link>
                </li>
              </ul>
              <SearchBar
                searchValue={searchValue}
                handleSearchValue={setSearchValue}
              />
              {cocktails
                .filter((cocktail) => cocktail.includes(searchValue))
                .map((cocktail) => (
                  <p>{cocktail}</p>
                ))}
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/random" element={<Random />} />
            <Route path="/popularcocktail" element={<PopularCocktail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
