import React, { useEffect } from "react";
import Background from "../utils/Baground";
import MainLanding from "./MainLanding";

function Landing() {
  return (
    <>
      <Background />
      <div className="mainLandingWrapper">
        <MainLanding />
      </div>
    </>
  );
}

export default Landing;
