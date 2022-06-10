import React, { useEffect, useState } from "react";
import "../assets/showCocktail.css";
import "../assets/style.css";
import { useParams } from "react-router-dom";
import { getCocktailById } from "@services/getCocktail";
import axios from "axios";

function ShowCocktail() {
  const params = useParams();
  const [cocktail, setCocktail] = useState([]);

  useEffect(async () => {
    await getCocktailById(params.idDrink).then((data) => setCocktail(data));
  }, [params.idDrink]);

  const [button, setButton] = useState(false);
  function clickButton() {
    setButton(!button);
    if (!button) {
      axios
        .post("http://localhost:5000/api/favorite", {
          id: 1,
          idcocktail: cocktail.id,
        })
        .then((res) => res.data);
    } else {
      axios
        .delete(`http://localhost:5000/api/favorite/${cocktail.id}`)
        .then((res) => res.data);
    }
  }

  return (
    <div className="cocktailContainer">
      <div className="drinkName">
        <h1>{cocktail.title}</h1>
        <p className="fav">
          Ajouter dans mes favoris{" "}
          <button onClick={clickButton} type="button" className="heart">
            {button ? (
              <i id={cocktail.id} className="fa-solid fa-heart" />
            ) : (
              <i id={cocktail.id} className="fa-regular fa-heart" />
            )}
          </button>
        </p>
      </div>

      <img src={cocktail.image} alt={cocktail.image} />

      <div className="ingredients">
        <h2>Ingredients</h2>
        <div className="list-ingredients-quantity">
          <ul>
            {cocktail.ingredients &&
              cocktail.ingredients.map((ingredient) => <li>{ingredient}</li>)}
          </ul>
          <ul>
            {cocktail.quantity &&
              cocktail.quantity.map((measure) => <li>{measure}</li>)}
          </ul>
        </div>
      </div>
      <div className="row" />
      <div className="recipe">
        <h2>Recipe</h2>
        <p>{cocktail.instructions}</p>
      </div>
    </div>
  );
}

export default ShowCocktail;
