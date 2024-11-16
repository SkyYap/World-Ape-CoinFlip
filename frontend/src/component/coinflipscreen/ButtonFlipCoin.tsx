import { Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FlipCoinBtn from "../../resources/button/FlipCoinBtn.png";
import FlipPingCoinBtn from "../../resources/button/FlipPingCoinBtn.png";
import anime from "animejs";

const ButtonFlipCoin = ({ setFlipAnimation, result, setResult }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const animFlipSend = (outcomeResult) => {
    // console.log("outcomeResult " + outcomeResult)
    // console.log("result " + result)
    if (result == "heads") {
      if (outcomeResult == result) {
        return "+=1800"
      }
      else {
        return "+=1980"
      }
    }
    else {
      if (outcomeResult == result) {
        return "+=1800"
      }
      else {
        return "+=1980"

      }
    }
  };

  return (
    <button
      disabled={isDisabled}
      onClick={(e) => {

        e.preventDefault();
        setIsDisabled(true);
        var randomResult = Math.random() < 0.5 ? "heads" : "tails";
        anime({
          targets: ".Card",
          scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 300 }],
          rotateY: { value: animFlipSend(randomResult), delay: 300 },
          easing: "linear",
          duration: 1800,
          complete: (a) => {
            setIsDisabled(false);
            setResult(randomResult);
          },
        });
      }}
    >
      <Image src={!isDisabled ? FlipCoinBtn : FlipPingCoinBtn} />
    </button>
  );
};

export default ButtonFlipCoin;
