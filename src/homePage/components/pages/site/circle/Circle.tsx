import React from "react";
import scss from "./Circle.module.scss";

const Circle = () => {
  return (
    <div className={scss.Circle}>
      <div className="container">
        <div className={scss.circle}></div>
      </div>
    </div>
  );
};

export default Circle;
