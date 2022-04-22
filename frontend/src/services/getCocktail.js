import axios from "axios";

function getCocktailByName(name) {
  // const API = "https://www.thecocktaildb.com/api.php";
  const test = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  axios
    .get(test)
    .then((response) => response.data)
    .then((data) => {
      console.warn(data[0]);
      // for (let i = 0; i < number; i++) {} */
    });
}

export default getCocktailByName;
