import React from "react";
import style from './PortfolioStats.module.css';

const PortfolioStats = () => {

    



    return (
        <div className={style.containerHeader}>
            <div className={style.portfolioValue}>{`$100,000`}</div>
            <div className={style.yield}>Portfolio Yield: {`10.87%`}</div>
            <div className={style.yieldOnCost}>Yield on Cost: {`11.98%`}</div>
            <div className={style.annualIncome}>Annual Income: {`$2,400.12`}</div>
            <div className={style.beta}>Portfolio Beta: {`0.72`}</div>
        </div>
    );
};

export default PortfolioStats;
