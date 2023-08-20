import React from "react";
import "../App.css";
import Cards from "./Cards";

const CardList = ({ title, isSlider = false }) => {
  return (
    <div className={"style-cards"}>
      <div>
        <h3 className="card-list-title">{title}</h3>
      </div>
      <Cards numberDisplayInOneLine={12} isSlider={isSlider} />
    </div>
  );
};

export default CardList;
