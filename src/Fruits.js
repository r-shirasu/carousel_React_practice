import "./Fruits.scss";
import React from "react";
import { fruitsData } from "./data";

export const Fruits = () => {
  return (
    <div className="review">
      {fruitsData.map((fruitsarray, fruitsIndex) => {
        fruitsIndex = 0;

        <div className="img-container" key={fruitsarray.id}>
          <img src="" id="img" alt="">
            {fruitsarray.img}
          </img>
          <h4 id="fruits">{fruitsarray.fruitsName}</h4>
          <p id="color">{fruitsarray.color}</p>
          <p id="info">{fruitsarray.text}</p>
        </div>;
      })}
    </div>
  );
};
