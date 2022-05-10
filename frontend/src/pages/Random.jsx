import React, { useState, useEffect } from "react";
import "../assets/showCocktail.css";
import "../assets/style.css";
import { getCocktailRandom } from "@services/getCocktail";

function Random() {
  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    getCocktailRandom().then((data) => setCocktail(data));
  }, []);

  const handleClick = async () => {
    await getCocktailRandom().then((data) => setCocktail(data));
  };

  const [isButton, setIsButton] = useState(false);
  function clickButton() {
    setIsButton(!isButton);
  }

  return (
    <>
      <h1 className="titles">RANDOM RECIPES</h1>
      <div className="cocktailContainer">
        {" "}
        <button type="button" className="moreRandom" onClick={handleClick}>
          <img src="../src/assets/drink.svg" alt="" className="image" />
          <p>Click for more!</p>
        </button>
        <div className="drinkName">
          <h1>{cocktail.title}</h1>
          <p className="fav">
            Ajouter dans mes favoris{" "}
            <button onClick={clickButton} type="button" className="heart">
              {isButton ? (
                <i className="fa-solid fa-heart" />
              ) : (
                <i className="fa-regular fa-heart" />
              )}
            </button>
          </p>
        </div>
        <img src={cocktail.image} alt={cocktail.image} />
        <div className="ingredients">
          <h2>Ingredients</h2>
          <div className="list-ingredients-quantity">
            <ul>
              {cocktail.ingredients &&
                cocktail.ingredients.map((ingredient) => (
                  <li key={cocktail.ingredients.id}>{ingredient}</li>
                ))}
            </ul>
            <ul>
              {cocktail.quantity &&
                cocktail.quantity.map((measure) => (
                  <li key={cocktail.quantity.id}>{measure}</li>
                ))}
            </ul>
          </div>
        </div>
        <div className="row" />
        <div className="recipe">
          <h2>Recipe</h2>
          <p>{cocktail.instructions}</p>
        </div>
      </div>
    </>
  );
}

export default Random;
