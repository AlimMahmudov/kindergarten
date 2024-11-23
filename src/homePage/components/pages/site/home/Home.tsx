import React from "react";
import scss from "./Home.module.scss";
// import img from "../../../../../shared/images/Benefits of creative art activities for kids _ Abrakadoodle.jpeg"
// import img from "@/shared/images/eje.webp";

const Home = () => {
  return (
    <div id="home" className={scss.Home}>
      <div className="container">
        <div className={scss.home}>
          <div className={scss.text}>
            <h1>Мы ждем вас в ДЕТСКИЙ САД УМНАЯ ПЛАНЕТА</h1>
            <p>
              Детский сад — это учреждение для детей дошкольного возраста, где
              они обучаются основам общения, развивают творческие и социальные
              навыки, играют, занимаются физкультурой и готовятся к учебе в
              школе.
            </p>
            <button>подробнее</button>
          </div>
          <div className={scss.img}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
