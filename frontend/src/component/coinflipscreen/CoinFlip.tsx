// import anime from "animejs";
import "./CoinFlip.css";

const CoinFlip = () => {

  // let playing = false;
  // let flip = () => {
  //   if (playing) return;
  //   playing = true;
  //   anime({
  //     targets: ".Card",
  //     scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 300 }],
  //     rotateY: { value: "+=1800", delay: 300 },
  //     easing: "linear",
  //     duration: 1800,
  //     complete: () => {
  //       playing = false;
  //     },
  //   });
  // };

  return (
    <div className="Card-container">
      <div className="Card">
        <div id="coin" key={+new Date()}>
          <div className="side-a"></div>
          <div className="side-b"></div>
        </div>
      </div>
    </div>
  );
};

export default CoinFlip;
