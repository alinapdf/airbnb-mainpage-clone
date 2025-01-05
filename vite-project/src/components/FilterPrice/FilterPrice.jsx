import React, { useState } from "react";
import "./filterprice.scss";

const FilterPrice = ({ isFilterActive, setIsFilterActive }) => {
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [activeId, setActiveId] = useState("totalPrice");

  const handleButtonClick = () => {
    setIsBtnActive((prevState) => !prevState);
    setActiveId(isBtnActive ? "totalPrice" : "totalPriceIncluded");

    setIsFilterActive((prev) => !prev);
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
