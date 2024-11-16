import anime from "animejs";
import React, { useState } from "react";
import "./CoinFlip.css";

interface CoinFlipProps {
  result: string;
}

const CoinFlip = ({ result }) => {
  const coinSide = result;

  let playing = false;
  let flip = (e) => {
    if (playing) return;
    playing = true;
    anime({
      targets: ".Card",
      scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 300 }],
      rotateY: { value: "+=1800", delay: 300 },
      easing: "linear",
      duration: 1800,
      complete: (a) => {
        playing = false;
      },
    });
  };

  return (
    <div id="coin">
      <div className="side-a"></div>
      <div className="side-b"></div>
    </div>
  );
};

export default CoinFlip;
