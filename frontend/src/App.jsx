import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "@components/NavBar";
import Random from "@pages/Random";
import PopularCocktail from "@pages/PopularCocktail";
import Banner from "@components/Banner";
import Home from "@pages/Home";
import "@assets/navbar.css";
import ShowCocktail from "@components/ShowCocktail";

function App() {
  return (
    <div>
      <Banner />
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/random" element={<Random />} />
            <Route path="/popular-cocktail" element={<PopularCocktail />} />
            <Route path="/show-cocktail" element={<ShowCocktail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
