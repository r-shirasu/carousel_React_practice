import "./Fruits.scss";
import React from "react";
import { fruitsData } from "./data";
// get our fontawesome imports

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Fruits = () => {
  let currentFruits = 0;
  return (
    <>
      <div className="review">
        <div className="img-container">
          <img src={fruitsData[currentFruits].img} id="img" alt=""></img>
          <h4 id="fruits">{fruitsData[currentFruits].fruitsName}</h4>
          <p id="color">{fruitsData[currentFruits].color}</p>
          <p id="info">{fruitsData[currentFruits].text}</p>
        </div>
        <div className="button-container">
          <button className="prev-btn">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="next-btn">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      <button className="random-btn">Random</button>
    </>
  );
};
