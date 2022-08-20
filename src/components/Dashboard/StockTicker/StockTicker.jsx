import React from "react";
import { useState } from 'react';
import style from './StockTicker.module.css';
import Axios from 'axios';

const StockTicker = () => {

    const [ticker, setTicker] = useState('')

    const getTicker = () => {
        Axios.get("https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/AAPL?apikey=0b92bda5d2f297a72d359be292be3991").then(
            (response) => {
                console.log(response.data.symbol) // Ticker
                setTicker(response.data.symbol) // Setting the Ticker
            }
            ).catch(err => {
                console.log("Request Error")
            }
        );
    };


    return (
        <div className={style.container}>
            <button onClick={getTicker}>Click Me</button>
            {ticker && <p>{ticker}</p>}
        </div>
    );
};

export default StockTicker;

