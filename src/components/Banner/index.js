import React from "react";
import "../../styles/BannerHero.css";
import "../../App.css";

import { Button } from "../Button";

import Hero from "../../assets/pexels-johann-1254140.jpg";

function BannerComponent() {
  return (
    <div className="hero-container">
      {/* <video
        src="/videos/trees.mp4"
        autoPlay
        loop
        muted
        className="hero-video"
      /> */}
      <img  src={Hero} id="hero-img" alt="dog sitting" width="100%" />

      <h1>Happy Puppy Adventures</h1>
      <p>Experienced Dog Care Specialist</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch Trailer
        </Button>
      </div>
      {/* <Button>Register Here</Button> */}
    </div>
  );
}

export default BannerComponent;
