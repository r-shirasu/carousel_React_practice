import "./Fruits.scss";
import React, { useState } from "react";
import { fruitsData } from "./data";

// get our fontawesome imports
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Fruits = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);

    if (count === fruitsData.length - 1) {
      setCount(0);
    }
  };

  const decrease = () => {
    setCount(count - 1);

    if (count === 0) {
      setCount(4);
    }
  };

  return (
    <>
      <div className="review">
        <div className="img-container">
          <img src={fruitsData[count].img} id="img" alt=""></img>
          <h4 id="fruits">{fruitsData[count].fruitsName}</h4>
          <p id="color">{fruitsData[count].color}</p>
          <p id="info">{fruitsData[count].text}</p>
        </div>
        <div className="button-container">
          <button className="prev-btn">
            <FontAwesomeIcon icon={faChevronLeft} onClick={decrease} />
          </button>
          <button className="next-btn">
            <FontAwesomeIcon icon={faChevronRight} onClick={increase} />
          </button>
        </div>
      </div>
      <button className="random-btn">Random</button>
    </>
  );
};
