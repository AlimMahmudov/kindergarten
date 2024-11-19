import React from "react";
import Home from "./site/home/Home";
import Filials from "./site/filials/Filials";
import Offer from "./site/offer/Offer";
import Message from "./site/message/Message";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Offer />
      <Filials />
      <Message />
    </div>
  );
};

export default HomePage;
