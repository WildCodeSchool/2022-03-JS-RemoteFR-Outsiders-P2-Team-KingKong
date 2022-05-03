import React, { useState, useEffect } from "react";
import { getCocktailByName } from "@services/getCocktail";
import SingleCard from "./SingleCard";
import "@assets/Card.css";
import "@assets/style.css";

function Card() {
  const [drinks, setdrinks] = useState([]);

  useEffect(async () => {
    const drink = await getCocktailByName("Margarita", 4);
    setdrinks(drink);
  }, []);
  console.warn(drinks);

  return (
    <div id="section-card">
      <div className="vignette">
        {drinks &&
          drinks.map((drink) => (
            <SingleCard image={drink.image} id={drink.id} title={drink.title} />
          ))}
      </div>
    </div>
  );
}

export default Card;
