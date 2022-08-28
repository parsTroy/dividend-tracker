import React from "react";
import Chart from "./Chart/Chart";
import style from './UpComingDividends.module.css';
import PortfolioStats from '../PortfolioStats/PortfolioStats';

const UpComingDividends = () => {


    return (
        <div className={style.container}>
          <div className={style.headingContainer}>
            <PortfolioStats />
          </div>
        <div className={style.portfolio}>

          <Chart />

        </div>
      </div>
    );
};

export default UpComingDividends;
