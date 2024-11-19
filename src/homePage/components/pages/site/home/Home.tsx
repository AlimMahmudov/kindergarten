import React from "react";
import scss from "./Home.module.scss";

const Home = () => {
  return (
    <div id="home" className={scss.Home}>
      <div className="container">
        <div className={scss.home}>
          <div className={scss.home_text}>
            <h1>Мы ждем вас в ДЕТСКИЙ САД "УМНАЯ ПЛАНЕТА"</h1>
            <p></p>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
