import React, { useState } from "react";
import "../assets/style.css";
import "../assets/Card.css";

function PopularCocktailCard({ strDrinkThumb, idDrink, strDrink }) {
  const [button, setButton] = useState(false);
  function clickButton() {
    setButton(!button);
  }
  return (
    <article className="articleVignette">
      <img className="imgCocktail" src={strDrinkThumb} alt="cocktail" />
      <div className="blocText">
        <button onClick={clickButton} type="button">
          {button ? (
            <i id={idDrink} className="fa-solid fa-heart" />
          ) : (
            <i id={idDrink} className="fa-regular fa-heart" />
          )}
        </button>
        <h2>{strDrink}</h2>
        <p>See cocktail recipe</p>
      </div>
    </article>
  );
}

export default PopularCocktailCard;
