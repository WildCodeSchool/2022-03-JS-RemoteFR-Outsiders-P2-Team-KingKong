import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SingleCard({ image, id, title }) {
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

  return (
    <Link to={`/show-cocktail/${id}`}>
      <article className="articleVignette">
        <img className="imgCocktail" src={image} alt="cocktail" />
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
    </Link>
  );
}

export default SingleCard;
