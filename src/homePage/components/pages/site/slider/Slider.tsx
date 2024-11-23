"use client";
import React, { useRef } from "react";
import img1 from "@/shared/images/masha.jpg";
import img2 from "@/shared/images/kind.jpg";
import img3 from "@/shared/images/news2.jpeg";
import img4 from "@/shared/images/news1.jpg";
import img5 from "@/shared/images/news3.jpeg";
import scss from "./Slider.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Image from "next/image";

const Sliders = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
      url: img1,
      title: "Заголовок 1",
      disc: "Описание 1",
      data: "12.03.2024",
    },
    {
      url: img2,
      title: "Заголовок 2",
      disc: "Описание 2",
      data: "13.03.2024",
    },
    {
      url: img3,
      title: "Заголовок 3",
      disc: "Описание 3",
      data: "14.03.2024",
    },
    {
      url: img4,
      title: "Заголовок 4",
      disc: "Описание 4",
      data: "15.03.2024",
    },
    {
      url: img5,
      title: "Заголовок 4",
      disc: "Описание 4",
      data: "15.03.2024",
    },
  ];

  return (
    <div className={scss.Sliders}>
      <div className="container">
      <div className={scss.filials_text}>
					<h1 data-aos="fade-left">Новости</h1>
				</div>
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
                      <Image
                        style={{ objectFit: "cover" }}
                        src={slide.url}
                        alt={`Image ${index + 1}`}
                        layout="fill"
                      />
                    </div>
                    <div className={scss.text}>
                    <h1>{slide.title}</h1>
                    <h2>{slide.disc}Lorem ipsum dolor sit amet consectetur, adipisicing   </h2>
                    <p>{slide.data}</p>
                    </div>
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

export default Sliders;
