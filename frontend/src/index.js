import axios from "axios";

function getCocktailByName() {
  const API = "https://www.thecocktaildb.com/api.php";
  const test =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  axios
    .get(test)
    .then((response) => response.data)
    .then(console.log(response));
}

export default getCocktailByName;
