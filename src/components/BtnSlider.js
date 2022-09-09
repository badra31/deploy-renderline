import React from "react";
import leftArrow from "../assets/icons/left-arrow.svg";
import rightArrow from "../assets/icons/right-arrow.svg";

function BtnSlider({ direction, moveSlide }) {
  return (
    <div className="data">
      <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
        <img src={direction === "next" ? rightArrow : leftArrow} />
      </button>
    </div>
  );
}

export default BtnSlider;
