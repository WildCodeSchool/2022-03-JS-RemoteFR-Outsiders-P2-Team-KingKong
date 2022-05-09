import React, { useState, useEffect } from "react";
import axios from "axios";
import "@assets/Card.css";
import "@assets/style.css";
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
    <div id="section-card">
      <div className="vignette">
        {data.map((idFavorite) => (
          <SingleCardFavoris
            idFavorite={idFavorite}
            key={idFavorite.idcocktail}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorite;
