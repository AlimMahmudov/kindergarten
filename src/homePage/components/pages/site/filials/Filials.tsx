import React from "react";
import scss from "./Filials.module.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import teacher from "@/shared/images/1033302.png";
import gis from "@/shared/images/gis.png";
import bulut from "@/shared/images/bulut.png";

import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Филиал 1",
    num: "+996 704 42 80 02",
    eje: "Махмудова Мариям Чынгызовична",
    doljnost: "Директор садика",
    doljnost2: "зам Директор",
    zam: "Махмудова Мариям Чынгызовична",
    ul: "МусаДжалиля 225",
  },
  {
    id: 2,
    name: "Филиал 2",
    num: "+996 704 42 80 02",
    eje: "Махмудова Мариям Чынгызовична",
    doljnost: "Директор садика",
    doljnost2: "зам Директор",
    zam: "Махмудова Мариям Чынгызовична",
    ul: "МусаДжалиля 129",
  },
  {
    id: 3,
    name: "Филиал 3",
    num: "+996 704 42 80 02",
    eje: "Махмудова Мариям Чынгызовична",
    doljnost: "Директор садика",
    doljnost2: "зам Директор",
    zam: "Махмудова Мариям Чынгызовична",
    ul: "МусаДжалиля 110",
  },
];

const Filials = () => {
  return (
    <>
      <div id="filials" className={scss.Filials}>
        <div className="container">
          <div className={scss.filials}>
            <div className={scss.filials_text}>
              <h1 data-aos="fade-left">Филиалы по Бишкеку</h1>
            </div>

            <div className={scss.block} data-aos="fade-up">
              {data.map((el, index) => (
                <div key={index} className={scss.box}>
                  <div className={scss.box_text}>
                    <h1>{el.name}</h1>
                    <p>{el.num}</p>
                  </div>
                  <div className={scss.user}>
                    <Image src={teacher} alt="" />
                    <div className={scss.user_text}>
                      <p>{el.doljnost}</p>
                      <h1>{el.eje}</h1>
                    </div>
                  </div>
                  <div className={scss.user}>
                    <Image src={teacher} alt="" />
                    <div className={scss.user_text}>
                      <p>{el.doljnost2}</p>
                      <h1>{el.zam}</h1>
                    </div>
                  </div>
                  <div className={scss.gis}>
                    <div className={scss.addres}>
                      <Image src={gis} alt="" />
                      <h1>{el.ul}</h1>
                    </div>
                    <div className={scss.watsapp}>
                      <h2>
                        <IoLogoWhatsapp />
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Image data-aos="fade-up" className={scss.bulut} src={bulut} alt="img" />
    </>
  );
};

export default Filials;
