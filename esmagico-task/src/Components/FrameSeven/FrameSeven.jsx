import React from "react";
import frameSevenStyles from "./FrameSeven.module.css";

const FrameSeven = () => {
  return (
    <div className={frameSevenStyles.frameSevenContainer}>
      <div className={frameSevenStyles.frameSeven_1}>
        <div className={frameSevenStyles.frameSeven_1_1}>
          <div>
            <div className={frameSevenStyles.star_circle}></div>
          </div>
          <div className={frameSevenStyles.personalDiv}>EMI Calculator</div>
        </div>
        <div className={frameSevenStyles.frameSeven_1_2}>
          <div className={frameSevenStyles.personImageDiv}></div>
          <div className={frameSevenStyles.interestImageDiv}></div>
        </div>
      </div>
    </div>
  );
};

export default FrameSeven;
