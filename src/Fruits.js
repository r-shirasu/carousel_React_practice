import "./Fruits.scss";
import React, { useState } from "react";
import { fruitsData } from "./data";

// get our fontawesome imports
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Fruits = () => {
  return (
    <div className="review">
      <div className="img-container">
        <img></img>
        <h4 className="fruits"></h4>
        <p className="color"></p>
        <p className="info"></p>
      </div>
      <div className="button-container">
        <button className="prev-btn">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="next-btn">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className="randombutton-container">
        <button className="random-btn">Random</button>
      </div>
    </div>
  );
};
