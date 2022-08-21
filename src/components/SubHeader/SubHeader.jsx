import React from 'react';
import DashboardButton from '../DashboardButton/DashboardButton';
import FutureValue from '../FutureValue/FutureValue';
import UpComingDividends from '../UpComingDividends/UpComingDividends';
import style from "./SubHeader.module.css";

const SubHeader = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>

        <DashboardButton />
        
        <FutureValue />

        <UpComingDividends />

        {/* <button className={style.dashboard}>
          <a href="/">Dashboard</a>
        </button>

        <button className={style.futureValue}>
          <a href="/futurevalue">Future Value</a>
        </button>

        <button className={style.upcomingDividends}>
          <a href="/upcomingdividends">Upcoming Dividends</a>
        </button> */}

      </div>
    </div>
  );
};

export default SubHeader;
