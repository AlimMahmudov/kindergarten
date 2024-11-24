"use client";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import scss from "./Header.module.scss";
import logo from "@/shared/images/Снимок экрана от 2024-11-20 08-22-24.png";
import Image from "next/image";

const links = [
  {
    name: "Главная",
    link: "home",
  },
  {
    name: "О нас",
    link: "about",
  },
  {
    name: "Новости",
    link: "slider",
  },
  {
    name: "Филиалы",
    link: "filials",
  },
  {
    name: "карта",
    link: "message",
  },
];

const Header = () => {
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
    <header
      id={scss.Header}
      className={`${scss.header} ${isVisible ? scss.visible : scss.hidden}`}
    >
      <div className="container">
        <div className={scss.header}>
          <Image src={logo} alt="Logo" />
          <div className={scss.nav}>
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
          <button>Связаться.</button>
        </div>
        =
      </div>
    </header>
  );
};

export default Header;
