import React from "react";
import { Link } from "react-router-dom";

function SingleCard({ image, id, title }) {
  const [button, setButton] = React.useState("");
  function clickButton() {
    setButton(!button);
  }
  return (
    <article className="articleVignette">
      <Link to="/show-cocktail">
        <img className="imgCocktail" src={image} alt="cocktail" />
      </Link>
      <div className="blocText">
        <button onClick={clickButton} type="button">
          {button ? (
            <i id={id} className="fa-solid fa-heart" />
          ) : (
            <i id={id} className="fa-regular fa-heart" />
          )}
        </button>

        <h2>{title}</h2>
        <p>cocktail recipe</p>
      </div>
    </article>
  );
}

export default SingleCard;
