import React from "react";
import { Route, Routes } from "react-router-dom";
import PopularCocktail from "@pages/PopularCocktail";
import Random from "@pages/Random";
import Home from "@pages/Home";
import Banner from "@components/Banner";
import Footer from "@components/Footer";
import Card from "@components/Card";
import NavBar from "@components/NavBar";
import ShowCocktail from "@components/ShowCocktail";
import GoUpArrow from "@components/GoUpArrow";
import "@assets/navbar.css";
import "@assets/app.css";
import Favorite from "@components/Favorite";

function App() {
  // Ne pas effacer pour le moment
  // React.useEffect(async () => {
  //   // INFO: Ici, nous récuperons les informations de la recette
  //   // Via un appel à la fonction "getCocktailByName" de manière asynchrone.
  //   // Ceci est un exemple de requête. Je le laisse pour les autres dev.
  //   // console.warn(await getCocktailByName('vodka', 4));
  // }, []);

  return (
    <div>
      <Banner />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random" element={<Random />} />
        <Route path="/popular-cocktail" element={<PopularCocktail />} />
        <Route path="/show-cocktail" element={<ShowCocktail />} />
        <Route path="/Favorite" element={<Favorite />} />
      </Routes>
      <GoUpArrow />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
