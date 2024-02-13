import React from "react";
import frameFiveStyles from "./FrameFive.module.css";

const FrameFive = () => {
  return (
    <div className={frameFiveStyles.frameFiveContainer}>
      <div className={frameFiveStyles.frameFive_1}>
        <div className={frameFiveStyles.handHeart}></div>
        <div className={frameFiveStyles.customerSays}>
          What Our Customer Says
        </div>
      </div>
      <div className={frameFiveStyles.frameFive_2}>
        <div className={frameFiveStyles.successfulMan}></div>
        <div className={frameFiveStyles.colons}></div>
        <div className={frameFiveStyles.paraDiv}>
          <p>SUNIL GUPTA</p>
          <p>Chartered Accountant</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            odio vitae justo vestibulum bibendum ac in sem. Sed varius tellus et
            purus iaculis, id varius odio rhoncus. Vestibulum vestibulum lacinia
            tortL orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            in odio vitae justo vestibulum bibendum ac in sem. Sed varius tellus
            et purus iaculis, id varius odio rhoncus. Vestibulum vestibulum
            lacinia tortor, et convallis libero vehicula ut. or, et convallis
            libero vehicula ut.{" "}
          </p>
          <div className={frameFiveStyles.lineDiv}></div>
        </div>
      </div>
    </div>
  );
};

export default FrameFive;
