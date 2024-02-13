import React from "react";
import frameOneStyles from "./FrameOne.module.css";

const FrameOne = () => {
  return (
    <div className={frameOneStyles.frameOneContainer}>
      <div className={frameOneStyles.frameOne_1}>
        <div className={frameOneStyles.frameOne_1_1}>
          Turn Dreams Into Reality With{" "}
          <span style={{ color: "#FF0096" }}>Personal Loans</span>
        </div>
        <div className={frameOneStyles.frameOne_1_2}>
          <div>
            <div
              className={frameOneStyles.frameOneIcons}
              id={frameOneStyles.availIcon}
            ></div>

            <div className={frameOneStyles.textDivFrameOne}>
              <span style={{ fontWeight: "bold" }}>Avail Zero</span>
              <span>Processing Fee</span>
            </div>
          </div>
          <div>
            <div
              className={frameOneStyles.frameOneIcons}
              id={frameOneStyles.QuickIcon}
            ></div>

            <div className={frameOneStyles.textDivFrameOne}>
              <span style={{ fontWeight: "bold" }}>Quick</span>
              <span>Personal Loan</span>
            </div>
          </div>
        </div>
        <div className={frameOneStyles.frameOne_1_3}>
          <div>
            <div
              className={frameOneStyles.frameOneIcons}
              id={frameOneStyles.lowestIcon}
            ></div>

            <div className={frameOneStyles.textDivFrameOne}>
              <span style={{ fontWeight: "bold" }}>Lowest</span>
              <span>Interest Rate</span>
            </div>
          </div>
          <div>
            <div
              className={frameOneStyles.frameOneIcons}
              id={frameOneStyles.miniamalIcon}
            ></div>

            <div className={frameOneStyles.textDivFrameOne}>
              <span style={{ fontWeight: "bold" }}>Miniamal</span>
              <span>Documentation</span>
            </div>
          </div>
        </div>
        <div className={frameOneStyles.applyNow}>Apply Now</div>
      </div>
      <div className={frameOneStyles.frameOne_2}></div>
    </div>
  );
};

export default FrameOne;
