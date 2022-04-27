import React, { useState } from "react";

function PopularCocktailCard(props) {
    const [button, setButton] = React.useState(false);
    function clickButton() {
      setButton(!button);
    }
    return (
        <div>
      <div className="vignette">
          <article className="articleVignette">
              <img
                className="imgCocktail"
                src={props.strDrinkThumb}
                alt="cocktail"
              />
            <div className="blocText">
              <button onClick={clickButton} type="button">
                {button ? (
                  <i id={props.idDrink} className="fa-regular fa-heart" />
                ) : (
                  <i id={props.idDrink} className="fa-solid fa-heart" />
                )}
              </button>
              <h2>{props.strDrink}</h2>
              <p>See cocktail recipe</p>
            </div>
          </article>
      </div>
    </div>
    );
  }

export default PopularCocktailCard;
