import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import logoimg from "./Logo.png";

const Logo = () => {
  return (
    <Tilt
      className="background-stripes parallax-effect-glare-scale ma4 mt0"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
    >
      <div className="inner-element">
        <div className="pa4">
          <img src={logoimg} alt="logo" />
        </div>
      </div>
    </Tilt>
  );
};

export default Logo;
