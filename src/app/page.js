"use client";

import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { database } from "./components/firebase";
import { ref, onValue } from "firebase/database";
const HomePage = () => {
  const [progressValue, setProgressValue] = useState(0);

  const getSensorData = () => {
    const sensorRef = ref(database, "sensor/data");
    onValue(sensorRef, (snapshot) => {
      const data = snapshot.val();
      console.log({ sensorData: data });
      const percentage = (data / 21.95) * 100;
      const absValue = Math.round(Math.abs(100 - percentage));
      setProgressValue(absValue);
    });
  };

  useEffect(() => {
    getSensorData();
  }, []);
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <h1 className="font-bold text-[25px] lg:text-[40px] mb-[2rem] lg:mb-[5rem]">
        The Gabbage Monitor
      </h1>
      <div className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]">
        <CircularProgressbar
          value={progressValue}
          text={`${progressValue}%`}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            textSize: "16px",
            pathColor: `rgba(62, 152, 199, ${progressValue / 100})`,
            textColor: "#f88",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
        />
      </div>
    </div>
  );
};

export default HomePage;
