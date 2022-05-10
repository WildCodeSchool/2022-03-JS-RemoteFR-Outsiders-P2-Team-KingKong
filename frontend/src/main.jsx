import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import MajorityCheck from "./components/MajorityCheck";

ReactDOM.render(
  <BrowserRouter>
    <MajorityCheck />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
