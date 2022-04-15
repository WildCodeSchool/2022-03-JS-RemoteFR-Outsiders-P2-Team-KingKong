import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Random from '@pages/Random';
import PopularCocktail from '@pages/PopularCocktail';
import Banner from "@components/Banner";
import Home from "@pages/Home";
import "@assets/navbar.css";

function App() {
  return (
    <div>
      <Banner />
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
        </div>
      </Router>
    </div>
  );
}

export default App;
