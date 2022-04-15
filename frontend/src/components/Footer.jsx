import React from "react";
import "../assets/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="mention">
        <p>L&apos;abus d&apos;alcool est dangereux pour la santé</p>
      </div>
      <div className="copyright">
        <p>
          &copy;{new Date().getFullYear()} KING KONG TEAM | All right reserved
        </p>
      </div>
    </div>
  );
}
