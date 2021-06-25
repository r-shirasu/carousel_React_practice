import "./Fruits.scss";
import React, { useState } from "react";
import { fruitsData } from "./data";

// get our fontawesome imports
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Fruits = () => {
  const [fruitsDataIndex, setFruitsDataIndex] = useState(0);

  const incrementFruitsIndex = () => {
    if (fruitsDataIndex >= fruitsData.length - 1) {
      setFruitsDataIndex(0);
    } else {
      setFruitsDataIndex(fruitsDataIndex + 1);
    }
  };

  const decrementFruitsIndex = () => {
    console.log("クリック");
  };

  return (
    <div className="review">
      <div className="img-container">
        <img
          src={fruitsData[fruitsDataIndex].img}
          alt={fruitsData[fruitsDataIndex].alt}
        ></img>
        <h4 className="fruits">{fruitsData[fruitsDataIndex].fruitsName}</h4>
        <p className="color">{fruitsData[fruitsDataIndex].color}</p>
        <p className="info">{fruitsData[fruitsDataIndex].text}</p>
      </div>
      <div className="button-container">
        <button className="prev-btn">
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={decrementFruitsIndex}
          />
        </button>
        <button className="next-btn">
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={incrementFruitsIndex}
          />
        </button>
      </div>

      <div className="randombutton-container">
        <button className="random-btn">Random</button>
      </div>
    </div>
  );
};
