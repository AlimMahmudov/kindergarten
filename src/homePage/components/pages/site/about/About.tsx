import React from "react";
import scss from "./About.module.scss";

const About = () => {
  return (
    <div id="about" className={scss.About}>
      <div className="container">
        <div className={scss.about}>
          <div className={scss.text}>
            <h1>О нашей садике</h1>
            <p>
              &quot;Гениус.Кейджи&quot; – частная общеобразовательная школа.
            </p>
            <button>узнать больше</button>
          </div>

          <div className={scss.block}>
            <div className={scss.block1}>
              <div className={scss.box_back}></div>
              <div className={scss.box_back2}></div>
              <div className={scss.box_back3}></div>
              <div className={scss.box_back4}></div>
            </div>
            <div className={scss.block2}>
              <div className={scss.box}>
                <button>🏆</button>
                <h1>Достижения учеников</h1>
                <p>
                  Наши ученики — победители республиканских и международных
                  олимпиад.
                </p>
              </div>
              <div className={scss.box2}>
                <button>🎯</button>
                <h1>Достижения учеников</h1>
                <p>
                  Наши ученики — победители республиканских и международных
                  олимпиад.
                </p>
              </div>
              <div className={scss.box3}>
                <button>💡</button>
                <h1>Достижения учеников</h1>
                <p>
                  Наши ученики — победители республиканских и международных
                  олимпиад.
                </p>
              </div>
              <div className={scss.box4}>
                <button>🎓</button>
                <h1>Достижения учеников</h1>
                <p>
                  Наши ученики — победители республиканских и международных
                  олимпиад.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
