import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "@assets/Card.css";

function SingleCard({ image, id, title, setSearchValue }) {
  const [button, setButton] = React.useState(false);
  function clickButton() {
    setButton(!button);
    if (!button) {
      axios
        .post("http://localhost:5000/api/favorite", {
          id: 1,
          idcocktail: id,
        })
        .then((res) => res.data);
    } else {
      axios
        .delete(`http://localhost:5000/api/favorite/${id}`)
        .then((res) => res.data);
    }
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
