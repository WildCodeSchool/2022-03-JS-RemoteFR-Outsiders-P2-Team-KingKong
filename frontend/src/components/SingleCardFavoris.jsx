import React, { useState, useEffect } from "react";
import axios from "axios";
import CardFavorite from "./CardFavorite";

function SingleCardFavoris({ idFavorite }) {
  const [drinks, setdrinks] = useState([]);

  // console.log(idFavorite.idcocktail);
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
    <div id="section-card">
      <div className="vignette">
        {drinks.map((nameDrink) => (
          <CardFavorite nameDrink={nameDrink} key={nameDrink.idDrink} />
        ))}
      </div>
    </div>
  );
}

export default SingleCardFavoris;
