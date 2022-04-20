import React from "react";
import "../assets/navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
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
      </nav>
    </div>
  );
}

export default NavBar;
