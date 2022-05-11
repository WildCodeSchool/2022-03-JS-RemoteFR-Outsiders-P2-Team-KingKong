import React from "react";
import Data from "@services/data.json";
import PopularCocktailCard from "./PopularCocktailCard";
import "../assets/Card.css";

function PopularCocktailList() {
  return (
    <div className="vignette">
      {Data.map((drink) => {
        const { id, image, title } = drink;
        return <PopularCocktailCard id={id} title={title} image={image} />;
      })}
    </div>
  );
}

export default PopularCocktailList;
