import axios from "axios";

// 2 problemes : impossible de return et random fonctionne pas
export default function getCocktailByName(name, number) {
  const test = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const cocktailList = [];
  const cocktail = {};
  axios
    .get(test)
    .then((response) => response.data)
    .then((data) => {
      for (let i = 0; i < number; i++) {
        (cocktail.id = data.drinks[i].idDrink),
          (cocktail.title = data.drinks[i].strDrink),
          (cocktail.image = data.drinks[i].strDrinkThumb),
          (cocktail.instructions = data.drinks[i].strInstructions),
          (cocktail.ingredients = getIngredientsToArray(data.drinks[i])),
          (cocktail.quantity = getMeasuresToArray(data.drinks[i])),
          cocktailList.push(cocktail);
      }
      console.log(cocktailList);
    });
}

function getCocktailByIngredient(ingredient, number) {
  const test = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`;
  const cocktailList = [];
  const cocktail = {};

  axios
    .get(test)
    .then((response) => response.data)
    .then((data) => {
      for (let i = 0; i < number; i++) {
        (cocktail.id = data.drinks[i].idDrink),
          (cocktail.title = data.drinks[i].strDrink),
          (cocktail.image = data.drinks[i].strDrinkThumb),
          (cocktail.instructions = data.drinks[i].strInstructions),
          (cocktail.ingredients = getIngredientsToArray(data.drinks[i])),
          (cocktail.quantity = getMeasuresToArray(data.drinks[i])),
          cocktailList.push(cocktail);
      }
      console.log(cocktailList);
    });
}

function getIngredientsToArray(list) {
  let ingredientsList = [
    list.strIngredient1,
    list.strIngredient2,
    list.strIngredient3,
    list.strIngredient4,
    list.strIngredient5,
    list.strIngredient6,
    list.strIngredient7,
    list.strIngredient8,
    list.strIngredient9,
    list.strIngredient10,
    list.strIngredient11,
    list.strIngredient12,
    list.strIngredient13,
    list.strIngredient14,
    list.strIngredient15,
  ];
  return ingredientsList;
}

function getMeasuresToArray(list) {
  let measuresList = [
    list.strMeasure1,
    list.strMeasure2,
    list.strMeasure3,
    list.strMeasure4,
    list.strMeasure5,
    list.strMeasure6,
    list.strMeasure7,
    list.strMeasure8,
    list.strMeasure9,
    list.strMeasure10,
    list.strMeasure11,
    list.strMeasure12,
    list.strMeasure13,
    list.strMeasure14,
    list.strMeasure15,
  ];
  return measuresList;
}

export { getCocktailByName, getCocktailByIngredient };
