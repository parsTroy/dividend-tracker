import React, { useEffect, useState } from "react";
import style from './DividendSafety.module.css';

const DividendSafety = () => {
  
    const url = 'https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/AAPL?apikey=0b92bda5d2f297a72d359be292be3991';
    const url2 = 'https://6300f6439a1035c7f8fb8068.mockapi.io/api/div/stock-data';
  
    const [safety, setSafety] = useState([])
  
    const fetchData = () => {
      fetch(url2) // URL TO USE
        .then(response => {
          return response.json();
        })
        .then(data => {
          setSafety(data)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])
  
    return (
      <div className={style.container}>
          {/* {'OR SYMBOL' || <div key={ticker.symbol}>{ticker.symbol}</div>} REAL API NEED TO FIX SEARCH AND FIND API */}
          {'✔ or x' || <div key={safety[0].safety}>{safety[0].safety}</div>}
      </div>
    )
  }
  
  export default DividendSafety
