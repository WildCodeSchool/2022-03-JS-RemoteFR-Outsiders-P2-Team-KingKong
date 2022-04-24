import React from "react";
import PopularCocktailCard from "./PopularCocktailCard";
import Data from "@services/data.json"


function PopularCocktailList({ drinks }) {
    console.log(drinks);
    return (
      <div>
        {Data.map((drink, index) => (
          <PopularCocktailCard key={index} {...drink} />
        ))}
      </div>
    );
  }

export default PopularCocktailList;