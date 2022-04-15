import "../assets/Banner.css";
import logo from "../assets/banner-logo.svg";

export default function Banner() {
  return (
    <div className="banner">
      <img src={logo} alt="logo Le mixAndDrink" />
      <p className="neonText">Mix & Drink</p>

      <p className="brandText">Cherchez votre bonheur</p>
    </div>
  );
}
