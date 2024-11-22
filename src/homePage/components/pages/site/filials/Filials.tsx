import React from "react";
import scss from "./Filials.module.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import teacher from "@/shared/images/1033302.png";
import gis from "@/shared/images/gis.png";

import Image from "next/image";

const Filials = () => {
  return (
    <div id="filials" className={scss.Filials}>
      <div className="container">
        <div className={scss.filials}>
          <div className={scss.filials_text}>
            <h1>Филиалы по Бишкеку</h1>
          </div>
          <div className={scss.blok}>
            <div className={scss.block_back}>
              <div className={scss.box_back}></div>
              <div className={scss.box_back}></div>
              <div className={scss.box_back}></div>
            </div>

            <div className={scss.block}>
              <div className={scss.box}>
                <div className={scss.box_text}>
                  <h1>Филиал 1</h1>
                  <p>+996 704 42 8002</p>
                </div>
                <div className={scss.user}>
                  <Image src={teacher} alt="" />

                  <div className={scss.user_text}>
                    <p>Директор садика</p>
                    <h1>
                      Махмудов Алим <br /> Чынгызович
                    </h1>
                  </div>
                </div>
                <div className={scss.user}>
                  <Image src={teacher} alt="" />
                  <div className={scss.user_text}>
                    <p>Директор садика</p>
                    <h1>
                      Махмудов Алим <br /> Чынгызович
                    </h1>
                  </div>
                </div>
                <div className={scss.gis}>
                  <div className={scss.addres}>
                    <Image src={gis} alt="" />
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
                  <Image src={teacher} alt="" />
                  <div className={scss.user_text}>
                    <p>Директор садика</p>
                    <h1>
                      Махмудов Алим <br /> Чынгызович
                    </h1>
                  </div>
                </div>
                <div className={scss.user}>
                  <Image src={teacher} alt="" />
                  <div className={scss.user_text}>
                    <p>Директор садика</p>
                    <h1>
                      Махмудов Алим <br /> Чынгызович
                    </h1>
                  </div>
                </div>
                <div className={scss.gis}>
                  <div className={scss.addres}>
                    <Image src={gis} alt="" />
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
                  <Image src={teacher} alt="" />
                  <div className={scss.user_text}>
                    <p>Директор садика</p>
                    <h1>
                      Махмудов Алим <br /> Чынгызович
                    </h1>
                  </div>
                </div>
                <div className={scss.user}>
                  <Image src={teacher} alt="" />
                  <div className={scss.user_text}>
                    <p>Директор садика</p>
                    <h1>
                      Махмудов Алим <br /> Чынгызович
                    </h1>
                  </div>
                </div>
                <div className={scss.gis}>
                  <div className={scss.addres}>
                    <Image src={gis} alt="" />
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
    </div>
  );
};

export default Filials;
