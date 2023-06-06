"use client";

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = ({ value }) => {
  return (
    <CircularProgressbar
      value={value}
      text={`${value}%`}
      styles={buildStyles({
        pathTransitionDuration: 0.5,
        textSize: "16px",
        pathColor: `rgba(62, 152, 199, ${value / 100})`,
        textColor: "#f88",
        trailColor: "#d6d6d6",
        backgroundColor: "#3e98c7",
      })}
    />
  );
};

export default CircularProgressBar;
