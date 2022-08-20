import React from "react";
import { useState } from 'react';
import style from './StockDividend.module.css';
import Axios from 'axios';

const StockDividend = () => {

  const [dividend, setDividend] = useState('')

  const dividendAmount = () => {
    Axios.get("https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/AAPL?apikey=0b92bda5d2f297a72d359be292be3991").then(
        (response) => {
            console.log(response.data.historical[0].dividend) // Dividend Float
            setDividend(response.data.historical[0].dividend) // Setting Dividend 
        }
        ).catch(err => {
          console.log("Request Error")
      }
    );
  };

  return (
    <div className={style.container}>
        <button onClick={dividendAmount}>Click Me</button>
        {dividend && <p>{dividend}</p>}
    </div>
  );
};

export default StockDividend;
