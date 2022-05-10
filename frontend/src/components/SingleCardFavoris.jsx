import React, { useState, useEffect } from "react";
import axios from "axios";
import CardFavorite from "./CardFavorite";
import "@assets/Card.css";
import "@assets/style.css";

function SingleCardFavoris({ idFavorite }) {
  const [drinks, setdrinks] = useState([]);

  useEffect(() => {
    const API = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idFavorite.idcocktail}`;

    axios
      .get(API)
      .then((res) => res.data)
      .then((data) => {
        setdrinks(data.drinks);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div id="section-cardfavo">
      <div className="vignetteFav">
        {drinks.map((nameDrink) => (
          <CardFavorite nameDrink={nameDrink} key={nameDrink.idDrink} />
        ))}
      </div>
    </div>
  );
}

export default SingleCardFavoris;
