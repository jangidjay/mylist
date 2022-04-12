import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./FrontBanner.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <div className="background-img">jid</div> */}
      <h1>Welcome to MYLIST</h1>
      <p>
        Make your own list of your favourite Anime, Series or Movies and Share
        with your Friends
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
