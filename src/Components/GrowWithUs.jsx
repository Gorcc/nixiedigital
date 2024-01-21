import React from "react";
import Website from "../Styles/We1.svg";
import "../Styles/GrowWithUs.scss";
import Grow from "../Styles/Soc1.svg";

const GrowWithUs = () => {
  return (
    <div className="grow-container">
      
      <div className="web-container">
        <div className="grow-left">
          <img src={Website} alt="Website" />
        </div>
        <div className="grow-right">
          <h1>HAVE YOUR OWN digital Space</h1>
          <p>
            Own your digital space. A website is your 24/7 global presence,
            essential for credibility and reaching a broader audience. It's your
            professional identity that speaks for you, even when you're offline.
          </p>
        </div>
      </div>
      <div className="web-container">
        <div className="grow-left-2">
          <h1>Social media impact</h1>
          <p>
            Professional social media posts are key to growth in the digital
            era. Crafting polished content builds credibility, attracts a wider
            audience, and fosters connections. Every post counts, offering
            opportunities to showcase expertise and boost visibility for
            ultimate success.
          </p>
        </div>
        <div className="grow-right-2">
          <img src={Grow} alt="Website" />
        </div>
      </div>
    </div>
  );
};

export default GrowWithUs;
