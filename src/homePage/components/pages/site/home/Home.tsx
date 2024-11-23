import React from "react";
import scss from "./Home.module.scss";
// import img from "../../../../../shared/images/Benefits of creative art activities for kids _ Abrakadoodle.jpeg"
import bulut from "@/shared/images/bulut.png";
import Image from "next/image";

const Home = () => {
  return (
     <>
     <div id="home" className={scss.Home}>
      <div className="container">
        <div className={scss.home}>
          <div className={scss.text} data-aos="zoom-in">
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
    <Image data-aos="fade-up" className={scss.bulut} src={bulut} alt="img" />
    </>
  );
};

export default Home;
