import React, { useState, useEffect } from "react";
import SingleCard from "./SingleCard";
import "@assets/Card.css";
import "@assets/style.css";

function Card() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [drinks, setdrinks] = useState([]);

  useEffect(() => {
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
  }
  return (
    <div id="section-card">
      <div className="vignette">
        {drinks.map((nameDrink) => (
          <SingleCard nameDrink={nameDrink} key={nameDrink.idDrink} />
        ))}
      </div>
    </div>
  );
}

export default Card;
