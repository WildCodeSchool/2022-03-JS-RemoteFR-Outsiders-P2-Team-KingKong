import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Random from '@pages/Random';
import PopularCocktail from '@pages/PopularCocktail';
import Card from "@components/Card";
import Home from "@pages/Home";
import "@assets/navbar.css";

function App() {
  return (
    <Router>
      <div>
        <nav className="navigation">
          <ul className="navigation-bar">
            <li className="navigation-name">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation-name">
              <Link to="/random">Random Cocktail</Link>
            </li>
            <li className="navigation-name">
              <Link to="/popularcocktail">Popular Cocktail</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/random" element={<Random />} />
          <Route path="/popularcocktail" element={<PopularCocktail />} />
        </Routes>
      <Card />
      </div>
    </Router>
  );
}

export default App;
