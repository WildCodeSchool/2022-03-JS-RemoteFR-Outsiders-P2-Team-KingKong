import React from "react";
import PopularCocktailList from "@components/PopularCocktailList";
import drinks from "@services/data.json";
import "@assets/popularcocktail.css";

function PopularCocktail() {
  return (
    <>
      <h1 className="popularcocktail-title">OUR TOP 10</h1>
      <PopularCocktailList drinks={drinks} />
    </>
  );
}

export default PopularCocktail;
