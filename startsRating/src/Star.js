import "./styles.css";
import React, { useEffect, useState } from "react";
export default function Star() {
  const [hoverRating, SetHoverRating] = useState(0);
  const [rating, setRating] = useState(0);
  return (
    <div className="star">
      <h1>Star Counter</h1>
      {[...Array(5)].map((_, index) => {
        return (
          <span
            className={`${index + 1 <= rating ? "yes" : ""} ${
              index + 1 <= hoverRating ? "yes" : ""
            }`}
            onMouseOver={() => {
              SetHoverRating(index + 1);
            }}
            onMouseOut={() => {
              SetHoverRating(0);
            }}
            onClick={() => {
              setRating(index + 1);
            }}
            key={index}
          >
            &#9733;
          </span>
        );
      })}
      <p>Rating : {rating}</p>
    </div>
  );
}
