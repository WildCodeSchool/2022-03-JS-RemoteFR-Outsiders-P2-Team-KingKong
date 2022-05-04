import React, {useEffect, useState} from "react";
import axios from "axios";



function Favorite() {
  //const [cocktail, setcocktail] = useState("");
  const API = `http://localhost:5000/api/favorite`;
  useEffect(() => {
    console.log(API);
    axios.get(API)
        .then(response => response.data)
        .then(data => {
          console.log(data);
         // setcocktail(data.cocktail.idcocktail);
            
        })
        .catch(e => console.error(e));
}, [])

  return (
    <div>
      <h1>coucou </h1>
   
    </div>
  );
}

export default Favorite;
