import React, { useState } from "react";
import "../assets/style.css";
import "../assets/Card.css";
import { Link } from "react-router-dom";

function PopularCocktailCard({ image, id, title }) {
  const [button, setButton] = useState(false);
  function clickButton() {
    setButton(!button);
  }
  return (
    <article className="articleVignette">
      <Link to={`/show-cocktail/${id}`}>
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
        <p>See cocktail recipe</p>
      </div>
    </article>
  );
}

export default PopularCocktailCard;
