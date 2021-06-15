import "./Fruits.scss";
import React from "react";
import { fruitsData } from "./data";
// get our fontawesome imports

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Fruits = () => {
  return (
    <>
      {fruitsData.map((fruitsarray, fruitsIndex) => {
        return (
          <>
            <div className="review">
              <div className="img-container" key={fruitsarray.id}>
                <img src={fruitsarray.img} id="img" alt=""></img>
                <h4 id="fruits">{fruitsarray.fruitsName}</h4>
                <p id="color">{fruitsarray.color}</p>
                <p id="info">{fruitsarray.text}</p>
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
      })}
    </>
  );
};
