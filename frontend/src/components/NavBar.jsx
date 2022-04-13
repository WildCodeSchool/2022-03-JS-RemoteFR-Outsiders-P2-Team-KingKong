import React from "react";
import "../assets/navbar.css";

function NavBar() {
  return (
    <div>
      <nav className="navigation">
        <ul className="navigation-bar">
          <li className="navigation-name">Random Cocktail</li>
          <li>Popular Cocktail</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
