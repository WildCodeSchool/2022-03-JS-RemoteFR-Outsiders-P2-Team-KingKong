import React, { useState, useEffect } from "react";
import { getCocktailByName } from "@services/getCocktail";
import SingleCard from "./SingleCard";
import "@assets/Card.css";
import "@assets/style.css";

function Card() {
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [error, setError] = useState(null);
  const [drinks, setdrinks] = useState([]);

  useEffect(async () => {
    const drink = await getCocktailByName("Margarita", 4);
    setdrinks(drink);
  }, []);
  console.warn(drinks);

  /* useEffect(() => {
    const API = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
    fetch(API)
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setdrinks(result.drinks);
      });
  }, []);
  if (error) {
    setIsLoaded(true);
    setError(error);
    return <div>Erreur : {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Chargement...</div>;
  } */
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
