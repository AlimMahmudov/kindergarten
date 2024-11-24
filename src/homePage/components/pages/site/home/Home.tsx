"use client";
import React, { useEffect, useState } from "react";
import scss from "./Home.module.scss";
import bulut from "@/shared/images/bulut.png";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const links = [
  {
    name: "подробнее",
    link: "about",
  },
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
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
              {links.map((item, index) => (
                <button key={index}>
                  <ScrollLink
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={900}
                  >
                    {item.name}
                  </ScrollLink>
                </button>
              ))}
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
