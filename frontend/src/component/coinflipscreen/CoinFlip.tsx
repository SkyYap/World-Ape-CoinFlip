import anime from "animejs";
import React, { useState } from "react";

import style from "./CoinFlip.css";

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
    <div class="Card-container">
      <div class="Card">
        <div id="coin" key={+new Date()}>
          <div className="side-a">
            {/* <span>Heads</span> */}
          </div>
          <div className="side-b">
            {/* <span>Tails</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinFlip;
