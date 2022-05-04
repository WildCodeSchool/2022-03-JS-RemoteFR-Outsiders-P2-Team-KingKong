import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "@components/SearchBar";
import "../assets/navbar.css";
import { getCocktailByName } from "@services/getCocktail";
import SingleCard from "./SingleCard";

function NavBar() {
  const [searchValue, setSearchValue] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [isShow, setIsShow] = useState(false);
  // const [isSearch, setIsSearch] = useState(true);

  const controlNavbar = () => {
    if (window.scrollY > 620) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  useEffect(async () => {
    let empty = false;
    if (searchValue.length === 0) {
      empty = true;
    } else {
      empty = false;
    }
    const cocktail = await getCocktailByName(searchValue, 10, empty);
    setCocktails(cocktail);
  }, [searchValue]);
  console.warn(cocktails);

  return (
    <div>
      <div className={`${isShow && "full-navigation"}`}>
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
      <div className="vignette" id="section-card">
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
  );
}

export default NavBar;
