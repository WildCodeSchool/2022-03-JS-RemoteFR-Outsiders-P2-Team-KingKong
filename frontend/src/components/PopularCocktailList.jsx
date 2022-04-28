import React from "react";
import Data from "@services/data.json";
import PopularCocktailCard from "./PopularCocktailCard";
import "../assets/Card.css";

function PopularCocktailList() {
  return (
    <div className="vignette">
      {Data.map((drink) => {
        const { idDrink, strDrinkThumb, strDrink } = drink;
        return (
          <PopularCocktailCard
            idDrink={idDrink}
            strDrink={strDrink}
            strDrinkThumb={strDrinkThumb}
          />
        );
      })}
    </div>
  );
}

export default PopularCocktailList;
