import React from "react";
import style from './Header.module.css';

const Header = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>InveStation</h1>
    </div>
  );
};

export default Header;
