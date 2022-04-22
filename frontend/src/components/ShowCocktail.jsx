import React from "react";
import "../assets/showCocktail.css";
import "../assets/style.css";

function ShowCocktail() {
  const drinks = {
    strDrink: "Margarita",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    strIngredient1: "Tequila",
    strIngredient2: "Triple sec",
    strIngredient3: "Lime juice",
    strIngredient4: "Salt",
    strIngredient5: null,
    strIngredient6: null,
    strMeasure1: "1 1/2 oz ",
    strMeasure2: "1/2 oz ",
    strMeasure3: "1 oz ",
    strMeasure4: null,
    strMeasure5: null,
    strInstructions:
      "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
  };

  return (
    <div className="cocktailContainer">
      <div className="drinkName">
        <h1>{drinks.strDrink}</h1>
        <p>
          Ajouter dans mes favoris{" "}
          <i className="em em-heart" aria-label="HEAVY BLACK HEART" />{" "}
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
