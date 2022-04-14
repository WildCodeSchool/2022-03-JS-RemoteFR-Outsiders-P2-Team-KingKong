import React from "react";
import "../assets/showCocktail.css";

function ShowCocktail({ drinks }) {
  return (
    <div className="cocktailContainer">
      <div className="drinkName">
        <h1>{drinks.strDrink}</h1>
      </div>

      <img src={drinks.strDrinkThumb} alt={drinks.strDrink} />

      <div className="ingredients">
        <h3> Ingredients</h3>
        <ul>
          <li>
            {drinks.strMeasure1} -- {drinks.strIngredient1}
          </li>
          <li>
            {drinks.strMeasure2} -- {drinks.strIngredient2}
          </li>
          <li>
            {drinks.strMeasure3} -- {drinks.strIngredient3}
          </li>
        </ul>
      </div>
      <div className="row" />
      <div className="recipe">
        <h3>
          <i
            class="em em-tropical_drink"
            aria-role="presentation"
            aria-label="TROPICAL DRINK"
          ></i>
          Recipe
        </h3>
        <p>{drinks.strInstructions}</p>
      </div>
    </div>
  );
}

export default ShowCocktail;
