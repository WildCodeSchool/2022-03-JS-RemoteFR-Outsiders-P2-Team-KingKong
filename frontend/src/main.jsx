import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { useState } from "react/cjs/react.production.min";
// import PopularCocktail from "@pages/PopularCocktail";
import App from "./App";
import MajorityCheck from "./components/MajorityCheck";

ReactDOM.render(
  <BrowserRouter>
    <MajorityCheck />
    display?
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
