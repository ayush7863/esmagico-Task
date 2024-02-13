import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import FrameOne from "../../Components/Frame One/FrameOne";
import FrameTwo from "../../Components/Frame Two/FrameTwo";
import FrameThree from "../../Components/Frame Three/FrameThree";
import FrameFour from "../../Components/FrameFour/FrameFour";
import FrameFive from "../../Components/Frame Five/FrameFive";
import FrameSix from "../../Components/Frame Six/FrameSix";
import FrameSeven from "../../Components/FrameSeven/FrameSeven";
import FrameNine from "../../Components/FrameNine/FrameNine";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div /* style={{width:"1440px"}} */>
      <Navbar />
      <FrameOne />
      <FrameTwo />
      <FrameThree />
      <FrameFour />
      <FrameFive />
      <FrameSix />
      <FrameSeven />
      <FrameNine />
      <Footer />
    </div>
  );
};

export default Home;
