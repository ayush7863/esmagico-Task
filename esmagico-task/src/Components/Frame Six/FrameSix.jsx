import React from "react";
import frameSixStyles from "./FrameSix.module.css";

const FrameSix = () => {
  return (
    <div className={frameSixStyles.frameSixContainer}>
      <div className={frameSixStyles.frameSix_1}>
        <div className={frameSixStyles.frameSix_1_1}>
          <div className={frameSixStyles.eligibility}>
            <div id={frameSixStyles.eligiIcon}></div>
            <div>Eligibility</div>
          </div>
          <div className={frameSixStyles.eligibility}>
            <div
              id={frameSixStyles.pointerIcon}
              className={frameSixStyles.Icons}
            ></div>
            <div>How to apply</div>
          </div>
        </div>
        <div className={frameSixStyles.frameSix_1_2}>
          <div className={frameSixStyles.eligibility}>
            <div id={frameSixStyles.documentation}></div>
            <div>Documentation</div>
          </div>
          <div className={frameSixStyles.eligibility}>
            <div id={frameSixStyles.money}></div>
            <div>Fee & Charges</div>
          </div>
        </div>
      </div>
      <div className={frameSixStyles.frameSix_2}></div>
    </div>
  );
};

export default FrameSix;
