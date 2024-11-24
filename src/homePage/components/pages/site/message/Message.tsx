"use client";
import React, { useState } from "react";
import scss from "./Message.module.scss";

const Message = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Ул.Гагарина,135",
      content:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.983623199183!2d74.55297427621225!3d42.85207897115141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9ad72beb12b%3A0x882800914573b80e!2zMTM1INGD0LvQuNGG0LAg0JPQsNCz0LDRgNC40L3QsCwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1732019006532!5m2!1sru!2skg",
    },
    {
      title: "Ул.Салиева,181",
      content:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.492892855786!2d74.63148527621387!3d42.88354647114904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb798aaef180f%3A0x3f92fce1a7548b68!2zMTgxINGD0LsuINCh0LDQu9C40LXQstC-0LksINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1732019080877!5m2!1sru!2skg",
    },
    {
      title: "ул.Садыгалиева,30",
      content:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.066118906881!2d74.52125967621328!3d42.87144857115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec89590929843%3A0x3009ae6ecba2ddec!2zMzAg0YPQu9C40YbQsCDQodCw0LTRi9Cz0LDQu9C40LXQstCwLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1732019135146!5m2!1sru!2skg",
    },
  ];

  return (
    <div id="message" className={scss.Message}>
      <div className="container">
        <div className={scss.message}>
          <div className={scss.text}>
            <h1 data-aos="fade-up">Карта наших филиалов</h1>
          </div>
          <div className={scss.block}>
            <div className={scss.box} data-aos="fade-right">
              <h1>Отправьте сообщение</h1>
              <div className={scss.form}>
                <div className={scss.inputs_box}>
                  <h1>Имя:</h1>
                  <input  placeholder="Введите имя" type="text" />
                </div>
                <div className={scss.inputs_box}>
                  <h1>Номер:</h1>
                  <input placeholder="Введите номер" type="text" />
                </div>
                <div className={scss.inputs_box}>
                  <h1>Отзыв:</h1>
                  <textarea  placeholder="Сообщение"></textarea>
                </div>
                <button>отправить</button>
              </div>
            </div>
            <div className={scss.box2} data-aos="fade-left">
              <div className={scss.iframes}>
              <h1>{tabs[activeTab].title}</h1>
                <iframe
                  src={tabs[activeTab].content}
                  title={tabs[activeTab].title}
                  style={{
                    borderColor:
                      activeTab === 0
                        ? "#2aa5f7"
                        : activeTab === 1
                        ? "#56ee28"
                        : activeTab === 2
                        ? "#ff3838"
                        : "#ff3838",
                  }}
                />
                
              </div>
              <div className={scss.tabs}>
                {tabs.map((el, index) => (
                  <button
                    key={index}
                    className={`${scss.tabButton} ${
                      activeTab === index ? scss.active : ""
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {el.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
