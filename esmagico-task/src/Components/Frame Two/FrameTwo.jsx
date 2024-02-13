import React from "react";
import frameTwoStyles from "./FrameTwo.module.css";

const FrameTwo = () => {
  return (
    <div className={frameTwoStyles.frameTwoContainer}>
      <div className={frameTwoStyles.frameTwo_1}>
        <div className={frameTwoStyles.frameTwo_1_1}>
          <div>
            <div className={frameTwoStyles.star_circle}></div>
          </div>
          <div className={frameTwoStyles.personalDiv}>Personal Loan Highlights</div>
        </div>
        <div className={frameTwoStyles.frameTwo_1_2}>
          <div className={frameTwoStyles.personImageDiv}></div>
          <div className={frameTwoStyles.interestImageDiv}></div>
        </div>
      </div>
    </div>
  );
};

export default FrameTwo;
