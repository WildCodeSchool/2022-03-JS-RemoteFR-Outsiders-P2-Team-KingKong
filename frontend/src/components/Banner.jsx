import "../assets/Banner.css";
import logo from "../assets/banner-logo.svg";

export default function Banner() {
  return (
    <div className="banner">
      <img src={logo} alt="logo Le mixAndDrink" />
      <h1 className="neonText">Mix & Drink</h1>
      <i class="fa-solid fa-chevron-down"></i>
    </div>
  );
}
