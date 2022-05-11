import React from "react";
import { Link } from "react-router-dom";
import "@assets/Card.css";
import "@assets/style.css";
import axios from "axios";

function SingleCard({ nameDrink }) {
  const [button, setButton] = React.useState(true);
  function clickButton() {
    setButton(!button);

    if (!button) {
      axios
        .post("http://localhost:5000/api/favorite", {
          id: 1,
          idcocktail: nameDrink.idDrink,
        })
        .then((res) => res.data);
    } else {
      axios
        .delete(`http://localhost:5000/api/favorite/${nameDrink.idDrink}`)
        .then((res) => res.data);
    }
  }

  return (
    <article className="articleVignette">
      <Link to={`/show-cocktail/${nameDrink.idDrink}`}>
        <img
          className="imgCocktail"
          src={nameDrink.strDrinkThumb}
          alt="cocktail"
        />
      </Link>

      <div className="blocText">
        <button onClick={clickButton} type="button">
          {button ? (
            <i id={nameDrink.idDrink} className="fa-solid fa-heart" />
          ) : (
            <i id={nameDrink.idDrink} className="fa-regular fa-heart" />
          )}
        </button>

        <h2>{nameDrink.strDrink}</h2>
        
      </div>
    </article>
  );
}

export default SingleCard;
