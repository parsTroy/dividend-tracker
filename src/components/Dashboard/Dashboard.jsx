import React, { useEffect, useState } from "react";
import AnnualIncome from "./AnnualIncome/AnnualIncome";
import AverageCost from "./AverageCost/AverageCost";
import Change from "./Change/Change";
import style from './Dashboard.module.css';
import DividendSafety from "./DividendSafety/DividendSafety";
import ProfitLoss from "./ProfitLoss/ProfitLoss";
import Shares from "./Shares/Shares";
import StockDividend from "./StockDividend/StockDividend";
import StockPrice from "./StockPrice/StockPrice";
import StockTicker from "./StockTicker/StockTicker";
import YieldOnCost from "./YieldOnCost/YieldOnCost";
import { data } from '../../data';


const Dashboard = (tickerArr) => {

  console.log("Dashboard "+data);

  const url = `https://financialmodelingprep.com/api/v3/quote-short/${tickerArr}?apikey=0b92bda5d2f297a72d359be292be3991`;
  // const url2 = 'https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/QYLD?apikey=0b92bda5d2f297a72d359be292be3991';
  // const url2 = 'https://6300f6439a1035c7f8fb8068.mockapi.io/api/div/stock-data';

  const [price, setPrice] = useState([]);
  const [q, setq] = useState([]);

  const fetchData = () => {
    fetch(url) // URL TO USE
      .then(response => {
        return response.json();
      })
      .then(data => {
        setPrice(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const totalPrice = (price[0] && price[0].price);
  const shareTotal = 35;

  const totalValue = (totalPrice*shareTotal).toFixed(2);

  // --------------------------------------------------------------


  return (
    <div className={style.container}>
      <div className={style.headingContainer}>
        <div className={style.portfolioValue}>{totalValue}</div>
        <div className={style.yield}>Portfolio Yield: {'9.87'}</div>
        <div className={style.yieldOnCost}>Yield on Cost: {`11.98%`}</div>
        <div className={style.annualIncome}>Annual Income: {`$2,400.12`}</div>
        <div className={style.beta}>Portfolio Beta: {`0.72`}</div>
      </div>
      <div className={style.portfolio}>
        <div className={style.ticker}>
          TICKER
          {data.map((tickers) => {
            return <li className={style.listItem}>{tickers.ticker}</li>
          })}
        </div>
        <div className={style.shares}>
          SHARES
          <Shares />
        </div>
        <div className={style.price}>
          PRICE
          {data.map((prices) => {
            return <li className={style.listItem}>{prices.price}</li>
          })}
        </div>
        <div className={style.change}>
          CHANGE
          {data.map((changes) => {
            return <li className={style.listItem}>{changes.change}</li>
          })}
        </div>
        <div className={style.averageCost}>
          AVERAGE COST
          <AverageCost />
        </div>
        <div className={style.profitLoss}>
          PROFIT/LOSS
          <ProfitLoss />
        </div>
        <div className={style.dividendYied}>
          DIVIDEND YIELD
          {data.map((dividends) => {
            return <li className={style.listItem}>{dividends.yield}</li>
          })}
        </div>
        <div className={style.yOC}>
          YIELD ON COST
          <YieldOnCost />
        </div>
        <div className={style.aI}>
          ANNUAL INCOME
          <AnnualIncome />
        </div>
        <div className={style.dividendSafey}>
          DIVIDEND SAFETY
          {data.map((safetys) => {
            return <li className={style.listItem}>{safetys.safety}</li>
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
