import React from "react";
import frameThreeStyles from "./FrameThree.module.css";

const FrameThree = () => {
  return (
    <div className={frameThreeStyles.frame3Container}>
      <div className={frameThreeStyles.ourPartnersDiv}>Our Partners</div>
      <div className={frameThreeStyles.banksDiv}>
        <div className={frameThreeStyles.banksDiv_1}>
          <div className={frameThreeStyles.hdfc}></div>
          <div className={frameThreeStyles.icici}></div>
        </div>
        <div className={frameThreeStyles.banksDiv_2}>
          <div className={frameThreeStyles.icici}></div>
          <div className={frameThreeStyles.baroda}></div>
        </div>
      </div>
    </div>
  );
};

export default FrameThree;
