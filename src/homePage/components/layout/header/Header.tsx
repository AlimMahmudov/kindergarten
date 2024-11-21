"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import scss from "./Header.module.scss";
import logo from "@/shared/images/Снимок экрана от 2024-11-20 08-22-24.png";
import Image from "next/image";

const links = [
  {
    name: "home",
    link: "home",
  },
  {
    name: "About",
    link: "aboutus",
  },

  {
    name: "Feed",
    link: "feed",
  },
  {
    name: "Contacts",
    link: "contacts",
  },
];

const Header = () => {
  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.header}>
          <Image src={logo} alt="" />
          <div className={scss.nav}>
            {links.map((item, index) => (
              <button key={index}>
                <ScrollLink
                  activeClass="active"
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                >
                  {item.name}
                </ScrollLink>
              </button>
            ))}
          </div>
          <button>add</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
