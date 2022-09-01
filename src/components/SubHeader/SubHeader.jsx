import React from 'react';
import style from "./SubHeader.module.css";

const SubHeader = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>

        {/* <button className={style.dashboard}>
          <a href="/">Dashboard</a>
        </button> */}

        {/* <button className={style.futureValue}>
          <a href="/futurevalue">Future Value</a>
        </button> */}

        {/* <button className={style.upcomingDividends}>
          <a href="/upcomingdividends">Scheduled Dividends</a>
        </button> */}

      </div>
    </div>
  );
};

export default SubHeader;
