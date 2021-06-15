import "./Fruits.scss";
import React from "react";
import { fruitsData } from "./data";

export const Fruits = () => {
  return (
    <>
      {fruitsData.map((fruitsarray, fruitsIndex) => {
        return (
          <div className="img-container" key={fruitsarray.id}>
            <img src={fruitsarray.img} id="img" alt=""></img>
            <h4 id="fruits">{fruitsarray.fruitsName}</h4>
            <p id="color">{fruitsarray.color}</p>
            <p id="info">{fruitsarray.text}</p>
          </div>
        );
      })}
    </>
  );
};

// F9gZemJQ;
