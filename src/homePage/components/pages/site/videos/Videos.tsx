"use client";
import React, { useRef } from "react";
import scss from "./Videos.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Videos = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = [
    {
      url: "https://www.youtube.com/embed/Doaisl0hN34",
      title: "Заголовок 1",
      disc: "Описание 1",
      data: "12.03.2024",
    },
    {
      url: "https://www.youtube.com/embed/Doaisl0hN34",
      title: "Заголовок 2",
      disc: "Описание 2",
      data: "13.03.2024",
    },
    {
      url: "https://www.youtube.com/embed/Doaisl0hN34",
      title: "Заголовок 3",
      disc: "Описание 3",
      data: "14.03.2024",
    },
    {
      url: "https://www.youtube.com/embed/Doaisl0hN34",
      title: "Заголовок 4",
      disc: "Описание 4",
      data: "15.03.2024",
    },
    {
      url: "https://www.youtube.com/embed/Doaisl0hN34",
      title: "Заголовок 4",
      disc: "Описание 4",
      data: "15.03.2024",
    },
  ];

  return (
    <div className={scss.Sliders}>
      <div className="container">
        <div className={scss.sliders}>
          <button
            className={`${scss.button} ${scss.prev}`}
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <FaChevronLeft />
          </button>
          <div className={scss.sliderContainer}>
            <Slider ref={sliderRef} {...settings}>
              {slides.map((slide, index) => (
                <div key={index} className={scss.sliderBox}>
                  <div className={scss.innerBox}>
                    <div className={scss.imageContainer}>
                      <iframe src={slide.url}></iframe>
                    </div>
                    <h1>{slide.title}</h1>
                    <h2>{slide.disc}</h2>
                    <p>{slide.data}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <button
            className={`${scss.button} ${scss.next}`}
            onClick={() => sliderRef.current?.slickNext()}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Videos;
