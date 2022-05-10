import React, { useState, useEffect } from "react";
import { getCocktailByName } from "@services/getCocktail";
import SingleCard from "./SingleCard";
import "@assets/Card.css";
import "@assets/style.css";

function Card() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(async () => {
    const cocktail = await getCocktailByName(cocktails, 10, false);
    setCocktails(cocktail);
  }, [cocktails]);
  return (
    <div id="section-card">
      <div className="vignette">
        {cocktails.map((cocktail) => (
          <SingleCard
            image={cocktail.image}
            id={cocktail.id}
            title={cocktail.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Card;
