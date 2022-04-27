import React from "react";
import { Link } from "react-router-dom";

function SingleCard({ nameDrink }) {
  const [button, setButton] = React.useState(false);
  function clickButton() {
    setButton(!button);
    // const id = nameDrink.idDrink;
    // if (button) {
    //   console.log(`favoris ${id} ${nameDrink.strDrink}`);
    // } else {
    //   console.log(`retiré des favoris ${id} ${nameDrink.strDrink}`);
    // }
  }
  return (
    <article className="articleVignette">
      <Link to="/show-cocktail">
        <img
          className="imgCocktail"
          src={nameDrink.strDrinkThumb}
          alt="cocktail"
        />
      </Link>
      <div className="blocText">
        <button onClick={clickButton} type="button">
          {button ? (
            <i id={nameDrink.idDrink} className="fa-regular fa-heart" />
          ) : (
            <i id={nameDrink.idDrink} className="fa-solid fa-heart" />
          )}
        </button>
        <h2>{nameDrink.strDrink}</h2>
        <p>cocktail recipe</p>
      </div>
    </article>
  );
}

export default SingleCard;