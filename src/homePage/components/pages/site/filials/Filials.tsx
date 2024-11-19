import React from "react";
import scss from "./Filials.module.scss";
import { IoLogoWhatsapp } from "react-icons/io";

const Filials = () => {
  return (
    <div id="filials" className={scss.Filials}>
      <div className="container">
        <div className={scss.filials}>
          <div className={scss.filials_text}>
            <h1>Филиалы по Бишкеку</h1>
          </div>
          <div className={scss.block}>
            <div className={scss.box}>
              <div className={scss.box_text}>
                <h1>Филиал 1</h1>
                <p>+996 704 42 8002</p>
              </div>
              <div className={scss.user}>
                <img
                  src="https://genius-school.kg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdirector3.a222572e.png&w=96&q=75"
                  alt=""
                />
                <div className={scss.user_text}>
                  <p>Директор садика</p>
                  <h1>
                    Махмудов Алим <br /> Чынгызович
                  </h1>
                </div>
              </div>
              <div className={scss.user}>
                <img
                  src="https://genius-school.kg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdirector3.a222572e.png&w=96&q=75"
                  alt=""
                />
                <div className={scss.user_text}>
                  <p>Директор садика</p>
                  <h1>
                    Махмудов Алим <br /> Чынгызович
                  </h1>
                </div>
              </div>
              <div className={scss.gis}>
                <div className={scss.addres}>
                  <img
                    src="https://genius-school.kg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2gis.6cd4eff1.png&w=48&q=75"
                    alt=""
                  />
                  <h1>Ул.Салиева, 181</h1>
                </div>
                <div className={scss.watsapp}>
                  <h2>
                    <IoLogoWhatsapp />
                  </h2>
                </div>
              </div>
            </div>

            <div className={scss.box}>
              <div className={scss.box_text}>
                <h1>Филиал 2</h1>
                <p>+996 704 42 8002</p>
              </div>
              <div className={scss.user}>
                <img
                  src="https://genius-school.kg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdirector3.a222572e.png&w=96&q=75"
                  alt=""
                />
                <div className={scss.user_text}>
                  <p>Директор садика</p>
                  <h1>
                    Махмудов Алим <br /> Чынгызович
                  </h1>
                </div>
              </div>
              <div className={scss.user}>
                <img
                  src="https://genius-school.kg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdirector3.a222572e.png&w=96&q=75"
                  alt=""
                />
                <div className={scss.user_text}>
                  <p>Директор садика</p>
                  <h1>
                    Махмудов Алим <br /> Чынгызович
                  </h1>
                </div>
              </div>
              <div className={scss.gis}>
                <div className={scss.addres}>
                  <img
                    src="https://genius-school.kg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2gis.6cd4eff1.png&w=48&q=75"
                    alt=""
                  />
                  <h1>Ул.Гагарина,135</h1>
                </div>
                <div className={scss.watsapp}>
                  <h2>
                    <IoLogoWhatsapp />
                  </h2>
                </div>
              </div>
            </div>

            <div className={scss.box}>
              <div className={scss.box_text}>
                <h1>Филиал 3</h1>
                <p>+996 704 42 8002</p>
              </div>
              <div className={scss.user}>
                <img
                  src="https://genius-school.kg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdirector3.a222572e.png&w=96&q=75"
                  alt=""
                />
                <div className={scss.user_text}>
                  <p>Директор садика</p>
                  <h1>
                    Махмудов Алим <br /> Чынгызович
                  </h1>
                </div>
              </div>
              <div className={scss.user}>
                <img
                  src="https://genius-school.kg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdirector3.a222572e.png&w=96&q=75"
                  alt=""
                />
                <div className={scss.user_text}>
                  <p>Директор садика</p>
                  <h1>
                    Махмудов Алим <br /> Чынгызович
                  </h1>
                </div>
              </div>
              <div className={scss.gis}>
                <div className={scss.addres}>
                  <img
                    src="https://genius-school.kg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2gis.6cd4eff1.png&w=48&q=75"
                    alt=""
                  />
                  <h1>Ул.Садыгалиева,30</h1>
                </div>
                <div className={scss.watsapp}>
                  <h2>
                    <IoLogoWhatsapp />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filials;
