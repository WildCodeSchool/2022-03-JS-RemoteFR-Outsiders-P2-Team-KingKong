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
import "@assets/navbar.css";
import "@assets/app.css";

function App() {
  return (
    <div>
      <Banner />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random" element={<Random />} />
        <Route path="/popular-cocktail" element={<PopularCocktail />} />
        <Route path="/show-cocktail" element={<ShowCocktail />} />
      </Routes>

      <Card />
      <Footer />
    </div>
  );
}

export default App;
