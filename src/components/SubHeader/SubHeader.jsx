import React from "react";
import style from "./SubHeader.module.css";

const SubHeader = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.dashboard}>Dashboard</div>
        <div className={style.futureValue}>Future Value</div>
        <div className={style.upcomingDividends}>Upcoming Dividends</div>
      </div>
    </div>
  );
};

export default SubHeader;
