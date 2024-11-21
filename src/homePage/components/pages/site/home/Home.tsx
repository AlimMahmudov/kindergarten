import React from "react";
import scss from "./Home.module.scss";
// import img from "../../../../../shared/images/Benefits of creative art activities for kids _ Abrakadoodle.jpeg"
// import img from "@/shared/images/Benefits of creative art activities for kids _ Abrakadoodle.jpeg"

const Home = () => {
  return (
    <div id="home" className={scss.Home}>
      <div className="container">
        <div className={scss.home}>
          <div className={scss.text}>
            <h1>Мы ждем вас в ДЕТСКИЙ САД УМНАЯ ПЛАНЕТА</h1>
            <p></p>
            <button></button>
          </div>
          <div className={scss.img}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
