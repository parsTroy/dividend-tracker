import React, { routes } from "react";
import style from "./SubHeader.module.css";

const SubHeader = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <button className={style.dashboard}>Dashboard</button>
        <button className={style.futureValue}>Future Value</button>
        <button className={style.upcomingDividends}>Upcoming Dividends</button>
      </div>
    </div>
  );
};

export default SubHeader;
