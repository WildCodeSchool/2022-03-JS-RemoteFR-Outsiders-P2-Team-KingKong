import React from "react";
import { Link } from "react-router-dom";
import "@assets/Card.css";

function SingleCard({ image, id, title, setSearchValue }) {
  const [button, setButton] = React.useState(false);
  function clickButton() {
    setButton(!button);
  }
  function handleClick() {
    setSearchValue("");
  }

  return (
    <article className="articleVignette">
      <Link to={`/show-cocktail/${id}`}>
        <button
          type="button"
          onClick={handleClick}
          onKeyDown={handleClick}
          className="remove-style"
        >
          <img className="imgCocktail" src={image} alt="cocktail" />
        </button>
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

export default SingleCard;
