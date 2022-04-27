import React, { useState } from "react";

function PopularCocktailCard({ strDrinkThumb, idDrink, strDrink }) {
  const [button, setButton] = useState(false);
  function clickButton() {
    setButton(!button);
  }
  return (
    <div>
      <div className="vignette">
        <article className="articleVignette">
          <img className="imgCocktail" src={strDrinkThumb} alt="cocktail" />
          <div className="blocText">
            <button onClick={clickButton} type="button">
              {button ? (
                <i id={idDrink} className="fa-regular fa-heart" />
              ) : (
                <i id={idDrink} className="fa-solid fa-heart" />
              )}
            </button>
            <h2>{strDrink}</h2>
            <p>See cocktail recipe</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default PopularCocktailCard;
