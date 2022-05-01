import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "@components/SearchBar";
import "../assets/navbar.css";

function NavBar() {
  const [searchValue, setSearchValue] = useState("");
  const [cocktails] = useState([""]);

  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (scrollY >= 890) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    addEventListener("scroll", controlNavbar);
    return () => {
      removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
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
        {cocktails
          .filter((cocktail) => cocktail.includes(searchValue))
          .map((cocktail) => (
            <p>{cocktail}</p>
          ))}
      </nav>
    </div>
  );
}

export default NavBar;
