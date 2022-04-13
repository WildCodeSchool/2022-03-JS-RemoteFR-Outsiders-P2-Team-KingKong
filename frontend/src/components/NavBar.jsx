import React from "react";
import navbar from "../assets/navbar.css"

const NavBar = () => {
	return (
      <div>
        <nav className="navigation">
          <ul className="navigation-bar">
            <li className="navigation-name">
              Random Cocktail
            </li>
            <li>
              Popular Cocktail
            </li>
          </ul>
        </nav>
      </div>
	);
};

export default NavBar;