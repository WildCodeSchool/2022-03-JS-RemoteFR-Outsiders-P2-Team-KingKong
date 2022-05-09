import React, { useEffect, useState } from "react";
import "@assets/gouparrow.css";

function GoUp() {
  const [isVisible, setIsVisible] = useState(false);
  const listenToScroll = () => {
    const heightToShowFrom = 700;
    const winScroll = document.documentElement.scrollTop;

    if (winScroll < heightToShowFrom) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="goup-part">
      {isVisible && (
        <a href="#section-0">
          <img
            src="https://www.svgrepo.com/show/409000/up.svg"
            alt=""
            className="goup-logo"
            loading="lazy"
          />
        </a>
      )}
    </div>
  );
}

export default GoUp;
