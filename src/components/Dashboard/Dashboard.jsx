import React from "react";
import style from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={style.container}>
      <div className={style.headingContainer}>
        <div className={style.portfolioValue}>{`$102,451.21`}</div>
        <div className={style.yield}>Portfolio Yield: {`9.87%`}</div>
        <div className={style.yieldOnCost}>Yield on Cost: {`11.98%`}</div>
        <div className={style.annualIncome}>Annual Income: {`$2,400.12`}</div>
        <div className={style.beta}>Portfolio Beta: {`0.72`}</div>
      </div>
      <div className={style.portfolio}>
        <div class={style.ticker}>
          TICKER
        </div>
        <div class={style.shares}>
          SHARES
        </div>
        <div class={style.price}>
          PRICE
        </div>
        <div class={style.change}>
          CHANGE
        </div>
        <div class={style.averageCost}>
          AVERAGE COST
        </div>
        <div class={style.profitLoss}>
          PROFIT/LOSS
        </div>
        <div class={style.dividendYied}>
          DIVIDEND YIELD
        </div>
        <div class={style.yOC}>
          YIELD ON COST
        </div>
        <div class={style.aI}>
          ANNUAL INCOME
        </div>
        <div class={style.dividendSafey}>
          DIVIDEND SAFETY
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
