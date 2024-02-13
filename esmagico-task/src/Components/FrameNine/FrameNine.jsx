import React from "react";
import frameNineStyles from "./FrameNine.module.css";

const FrameNine = () => {
  return (
    <div className={frameNineStyles.frameNineContainer}>
      <div className={frameNineStyles.frameNine_1}>
        <div className={frameNineStyles.frameNine_1_1}></div>
        <div className={frameNineStyles.frameNine_1_2}>
          <div className={frameNineStyles.frameNine_1_2_1}>
            <p>AnyThing not clear?</p>
            <p>
              You can see our detailed F&Q sessions if you have more quiries.
              Also we are always a single call away for all your special asks...
            </p>
          </div>
          <div className={frameNineStyles.frameNine_1_2_2}>
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameNine;
