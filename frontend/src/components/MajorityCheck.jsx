import "../assets/MajorityCheck.css";
import { useState } from "react";
import logo from "@assets/banner-logo.svg";

// eslint-disable-next-line react/prop-types

export default function MajorityCheck() {
  const logoStyle = {
    width: "25rem",
    marginBottom: "-3rem",
  };

  const textStyle = {
    fontWeight: "500",
    fontSize: "3rem",
    color: "white",
    margin: "auto",
    transform: "rotate(-10deg)",
    cursor: "pointer",
    fontFamily: '"Pacifico", cursive"',
  };

  const buttonStyle = {
    fontFamily: '"Pacifico", cursive"',
    margin: "4rem 20px",
    width: "10rem",
    height: "4rem",
    cursor: "pointer",
  };

  const [display, setDisplay] = useState(true);

  function hideLayer() {
    setDisplay(false);
  }

  return (
    <div className={!display ? "displayNone" : "display"}>
      <img style={logoStyle} src={logo} alt="" />
      <p style={textStyle} className="neonText">
        Avez-vous plus de 18 ans ?
      </p>
      <div>
        <button
          type="button"
          style={buttonStyle}
          className="btn"
          onClick={hideLayer}
        >
          Oui
        </button>
        <button type="button" style={buttonStyle}>
          Non
        </button>
      </div>
    </div>
  );
}
