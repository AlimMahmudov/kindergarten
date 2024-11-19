"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

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
    <header>
      <div className="container">
        <div className="">
          <div className="">
            <ul>
              {links.map((item, index) => (
                <li key={index}>
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
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
