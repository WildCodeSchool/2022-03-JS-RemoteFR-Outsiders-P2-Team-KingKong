import React from "react";
import "../assets/showCocktail.css";
import "../assets/style.css";

function ShowCocktail({ drinks }) {
  return (
    <div className="cocktailContainer">
      <div className="drinkName">
        <h1>{drinks.strDrink}</h1>
        <p>
          Ajouter dans mes favoris{" "}
          <i
            class="em em-heart"
            aria-role="presentation"
            aria-label="HEAVY BLACK HEART"
          ></i>{" "}
        </p>
      </div>

      <img src={drinks.strDrinkThumb} alt={drinks.strDrink} />

      <div className="ingredients">
        <h2> Ingredients</h2>
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
        <h2>
          <i className="em em-tropical_drink" aria-label="TROPICAL DRINK" />
          Recipe
        </h2>
        <p>{drinks.strInstructions}</p>
      </div>
    </div>
  );
}

export default ShowCocktail;
