import React from "react";
import style from './Dashboard.module.css';
import StockDividend from "./StockDividend/StockDividend";
import StockPrice from "./StockPrice/StockPrice";
import StockTicker from "./StockTicker/StockTicker";

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
        <div className={style.ticker}>
          TICKER
          <StockTicker />
        </div>
        <div className={style.shares}>
          SHARES
        </div>
        <div className={style.price}>
          PRICE
          <StockPrice />
        </div>
        <div className={style.change}>
          CHANGE
        </div>
        <div className={style.averageCost}>
          AVERAGE COST
        </div>
        <div className={style.profitLoss}>
          PROFIT/LOSS
        </div>
        <div className={style.dividendYied}>
          DIVIDEND YIELD
          <StockDividend />
        </div>
        <div className={style.yOC}>
          YIELD ON COST
        </div>
        <div className={style.aI}>
          ANNUAL INCOME
        </div>
        <div className={style.dividendSafey}>
          DIVIDEND SAFETY
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
