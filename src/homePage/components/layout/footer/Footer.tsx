import React from "react";
import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.footer}></div>
      </div>
    </footer>
  );
};

export default Footer;
