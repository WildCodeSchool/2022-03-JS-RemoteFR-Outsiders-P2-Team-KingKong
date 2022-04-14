import React from "react";
import ShowCocktail from "../components/ShowCocktail";

const drinks = {
  strDrink: "Margarita",
  strDrinkThumb:
    "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
  strIngredient1: "Tequila",
  strIngredient2: "Triple sec",
  strIngredient3: "Lime juice",
  strIngredient4: "Salt",
  strIngredient5: null,
  strIngredient6: null,
  strMeasure1: "1 1/2 oz ",
  strMeasure2: "1/2 oz ",
  strMeasure3: "1 oz ",
  strMeasure4: null,
  strMeasure5: null,
  strInstructions:
    "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",

 };

function Home() {

  return (
    <header className="App-header">
      <ShowCocktail drinks={drinks} />
    </header>
  );
}

export default Home;
