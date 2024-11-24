"use client";
import React, { useEffect } from "react";
import Home from "./site/home/Home";
import Filials from "./site/filials/Filials";
import Offer from "./site/offer/Offer";
import Message from "./site/message/Message";
import About from "./site/about/About";
import Videos from "./site/videos/Videos";
import Answer from "./site/answer/Answer";
import Sliders from "./site/slider/Slider";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Home />
      {/* <Offer /> */}
      {/* <About /> */}
      {/* <Sliders /> */}
      {/* <Filials /> */}
      {/* <Videos /> */}
      {/* <Answer /> */}
      <Message />
    </div>
  );
};

export default HomePage;
