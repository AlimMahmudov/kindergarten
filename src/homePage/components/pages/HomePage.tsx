import React from "react";
import Home from "./site/home/Home";
import Filials from "./site/filials/Filials";
import Offer from "./site/offer/Offer";
import Message from "./site/message/Message";
// import Slider from "./site/slider/Slider";
import About from "./site/about/About";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Offer />
      <About />
      <Filials />
      {/* <Slider /> */}
      <Message />
    </div>
  );
};

export default HomePage;
