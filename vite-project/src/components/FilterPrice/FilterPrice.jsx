import React, { useState } from "react";
import "./filterprice.scss";

const FilterPrice = () => {
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [activeId, setActiveId] = useState("totalPrice");

  const handleButtonClick = () => {
    setIsBtnActive((prevState) => !prevState);
    setActiveId(isBtnActive ? "totalPrice" : "totalPriceIncluded");
  };

  return (
    <div className="filterPrice">
      <div className="container">
        <div className="filterPrice-wrapper">
          <div className="filterPrice_options">
            <div
              className={`filterPrice_options-item ${
                activeId === "totalPrice" ? "active" : ""
              }`}
              id="totalPrice"
            >
              Display total price
            </div>
            <div
              className={`filterPrice_options-item ${
                activeId === "totalPriceIncluded" ? "active" : ""
              }`}
              id="totalPriceIncluded"
            >
              Includes all fees, before taxes
            </div>
          </div>
          <button
            className={`filterPrice_btn ${isBtnActive ? "active" : ""}`}
            onClick={handleButtonClick}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default FilterPrice;
