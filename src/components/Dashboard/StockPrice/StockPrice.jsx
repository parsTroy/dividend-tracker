import React from "react";
import { useState } from 'react';
import style from './StockPrice.module.css';
import Axios from 'axios';

const StockPrice = () => {

    const [price, setPrice] = useState('')

    const getPrice = () => {
        Axios.get("https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=0b92bda5d2f297a72d359be292be3991")
            .then(
                (response) => {
                    console.log(response.data[0].price) // Price
                    setPrice(response.data[0].price) // Setting the Price
                }
            ).catch(err => {
                console.log("Request Error")
            });
    };

    return (
        <div className={style.container}>
            <button onClick={getPrice}>Press Me!</button>
            {price && <p>{price}</p>}
        </div>
    );
};

export default StockPrice;
