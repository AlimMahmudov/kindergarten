import React from "react";
import scss from "./Offer.module.scss";

const Offer = () => {
  return (
    <div id="offer" className={scss.Offer}>
      <div className="container">
        <div className={scss.offer}>
          <div className={scss.offer_text}>
            <h1>Что мы предлагаем</h1>
          </div>

          <div className={scss.blok}>
            <div className={scss.block}>
              <div className={scss.box}>
                <h2>🌍</h2>
                <h1>Изучение языков</h1>
                <p>Мы обучаем английскому, русскому, кыргызскому.</p>
              </div>

              <div className={scss.box}>
                <h2>🍽</h2>
                <h1>3-разовое питание</h1>
                <p>
                  В течение дня дети получают полноценное питание, что помогает
                  поддерживать их энергию и здоровье.
                </p>
              </div>

              <div className={scss.box}>
                <h2>🎨</h2>
                <h1>Кружки</h1>
                <p>
                  Мы предлагаем спортивные секции, творческие студии,
                  интеллектуальные игры и музыкальные занятия.
                </p>
              </div>

              <div className={scss.box}>
                <h2>✅</h2>
                <h1>Школа полного дня</h1>
                <p>
                  8:00 - 17:00 дети заняты, <br />
                  17:00 дети садятся на трансфер, <br />
                  ожидание родителей до 18:30.
                </p>
              </div>

              <div className={scss.box}>
                <h2>📍</h2>
                <h1>3 филиалов по Бишкеку</h1>
                <p>
                  Удобное расположение филиалов по городу позволяет легко
                  выбрать детский сад рядом с домом.
                </p>
              </div>

              <div className={scss.box}>
                <h2>👶🏻</h2>
                <h1>До 16 учеников</h1>
                <p>
                  Учителя могут уделить внимание каждому ребенку благодаря
                  малочисленным классам.
                </p>
              </div>
            </div>
            {/* 
            <div className={scss.block_back}>
              <div className={scss.box_back}></div>
              <div className={scss.box_back}></div>
              <div className={scss.box_back}></div>
              <div className={scss.box_back}></div>
              <div className={scss.box_back}></div>
              <div className={scss.box_back}></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
