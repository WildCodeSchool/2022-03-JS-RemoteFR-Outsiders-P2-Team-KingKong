import React from "react";
import PopularCocktailList from "@components/PopularCocktailList";
import drinks from "@services/data.json";
import "@assets/titles.css";

function PopularCocktail() {
  return (
    <>
      <h1 className="titles">OUR TOP 10</h1>
      <PopularCocktailList drinks={drinks} />
    </>
  );
}

export default PopularCocktail;
