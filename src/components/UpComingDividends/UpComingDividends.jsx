import React from "react";
import style from './UpComingDividends.module.css';

const UpComingDividends = () => {
    return (
        <div className={style.container}>
        <div className={style.headingContainer}>
          <div className={style.portfolioValue}>{'$249,929.49'}</div>
          <div className={style.yield}>Portfolio Yield: {`9.87%`}</div>
          <div className={style.yieldOnCost}>Yield on Cost: {`11.98%`}</div>
          <div className={style.annualIncome}>Annual Income: {`$2,400.12`}</div>
          <div className={style.beta}>Portfolio Beta: {`0.72`}</div>
        </div>
        <div className={style.portfolio}>

        </div>
      </div>
    );
};

export default UpComingDividends;
