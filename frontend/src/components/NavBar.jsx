import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "@components/SearchBar";
import "../assets/navbar.css";
import { getCocktailByName } from "@services/getCocktail";
import SingleCard from "./SingleCard";

function NavBar() {
  const [searchValue, setSearchValue] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [show, setShow] = useState(true);

  const controlNavbar = () => {
    if (window.scrollY >= 890) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  useEffect(async () => {
    const cocktail = await getCocktailByName(searchValue, 3);
    setCocktails(cocktail);
  }, [searchValue]);
  console.warn(cocktails);

  return (
    <div>
      <div className={`${show && "full-navigation"}`}>
        <nav className="navigation">
          <ul className="navigation-bar">
            <li className="navigation-name">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation-name">
              <Link to="/random">Random</Link>
            </li>
            <li className="navigation-name">
              <Link to="/popular-cocktail">Popular</Link>
            </li>
          </ul>
          <SearchBar
            searchValue={searchValue}
            handleSearchValue={setSearchValue}
          />
        </nav>
      </div>
      <div id="section-card">
        <div className="vignette">
          {cocktails &&
            cocktails.map((cocktail) => (
              <SingleCard
                image={cocktail.image}
                id={cocktail.id}
                title={cocktail.title}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
