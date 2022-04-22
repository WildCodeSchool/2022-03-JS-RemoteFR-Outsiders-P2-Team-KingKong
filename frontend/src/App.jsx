import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Random from "@pages/Random";
import PopularCocktail from "@pages/PopularCocktail";
import Banner from "@components/Banner";
import Home from "@pages/Home";
import "@assets/navbar.css";
import NavBar from "@components/NavBar";
import getCocktailByName from "@services/getCocktail";

function App() {
  getCocktailByName("mojito", 3, 1);
  return (
    <div>
      <Banner />
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/random" element={<Random />} />
            <Route path="/popularcocktail" element={<PopularCocktail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
