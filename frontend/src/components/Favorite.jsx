import React, { useState, useEffect } from "react";
import axios from "axios";
import "@assets/Card.css";
import "@assets/style.css";
import "@assets/favorite.css";
import SingleCardFavoris from "./SingleCardFavoris";

function Favorite() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const API = `http://localhost:5000/api/favorite`;
    axios
      .get(API)
      .then((res) => res.data)
      .then((data2) => {
        setdata(data2);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div id="section-cardFavorite">
      <div className="vignetteFavorite">
        <h1 className="neonText">My Favorite</h1>
        <div className="favoriteWrap">
          {data.map((idFavorite) => (
            <SingleCardFavoris
              idFavorite={idFavorite}
              key={idFavorite.idcocktail}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorite;
