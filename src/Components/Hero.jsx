import React from "react";
import HeroLeftIcon from "../images/svg/Hero-left-icon.svg";
import HeroRightIcon from "../images/svg/Hero-right-icon.svg";

function Hero() {
  return (
    <section className="my-2 my-md-4 my-lg-5 py-5 position-relative hero_section">
      <img
        className="start-0 position-absolute"
        src={HeroLeftIcon}
        alt="HeroLeftIcon"
      />
      <img
        className="end-0 position-absolute"
        src={HeroRightIcon}
        alt="HeroRightIcon"
      />
      <div className="container custom_container mt-1">
        <div className="row text-center">
          <div className="col-10 col-lg-10 col-xl-9 col-xxl-11 m-auto">
            <p className="line_height_125 font_m fw_600 grey">
              Your Ultimate Pooja Room Destination
            </p>
            <h1 className="line_height font_xxl fw-bold black mt-2 line_height_125">
              Helping Devotees Re-Imagine Their
              <span className="dark_yellow"> Pooja Rooms</span>
            </h1>
            <p className="mt-3 mb-4 mb-md-5 line_height_150 middle_para fw_500 grey font_sm m-auto hero_para">
              Transforming Devotion: Crafting a Divine Space that Embodies
              Spirituality, Elegance, and Contemporary Style with Grace
            </p>
            <button className="common_button">Get into touch</button>
          </div>
        </div>

        <video src="./"></video>
      </div>
    </section>
  );
}

export default Hero;
