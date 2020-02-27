import React, { Component } from "react";
import Carrousel from "./Carrousel";
import TimeUnitl from "./TimeUntil";

const Featured = () => {
  return (
    <div style={{ pisition: "relative" }}>
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">Ariana Grande</div>
      </div>
      <TimeUnitl />
    </div>
  );
};

export default Featured;
