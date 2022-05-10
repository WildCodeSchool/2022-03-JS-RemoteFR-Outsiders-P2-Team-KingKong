import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "@components/SearchBar";
import "../assets/navbar.css";
import { getCocktailByName, getCocktailFromIds } from "@services/getCocktail";
import SingleCard from "./SingleCard";

function NavBar() {
  const [searchValue, setSearchValue] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [isShow, setIsShow] = useState(false);

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
    let isEmpty = false;
    if (searchValue.length === 0) {
      isEmpty = true;
    } else {
      isEmpty = false;
    }
    const cocktail = await getCocktailByName(searchValue, 4, isEmpty);
    setCocktails(cocktail);
  }, [searchValue]);
  console.warn(cocktails);

  useEffect(async () => {
    const ingredient = await getCocktailFromIds(searchValue, 0);
    setCocktails(ingredient);
  }, []);
  return (
    <>
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
            setSearchValue={setSearchValue}
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
                setSearchValue={setSearchValue}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default NavBar;
