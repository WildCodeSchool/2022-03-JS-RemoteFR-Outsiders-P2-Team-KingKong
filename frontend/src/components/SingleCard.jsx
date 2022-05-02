import React from "react";
import { Link } from "react-router-dom";

function SingleCard({ strDrinkThumb, idDrink, strDrink }) {
  const [button, setButton] = React.useState(false);
  function clickButton() {
    setButton(!button);
  }

  return (
    <Link to={`/show-cocktail/${idDrink}`}>
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
          <p>cocktail recipe</p>
        </div>
      </article>{" "}
    </Link>
  );
}

export default SingleCard;
