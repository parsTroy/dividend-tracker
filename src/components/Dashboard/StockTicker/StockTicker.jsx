import React, { useEffect, useState } from "react"
import style from './StockTicker.module.css';

const StockTicker = () => {
  
  const url = 'https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/AAPL?apikey=0b92bda5d2f297a72d359be292be3991';

  const [ticker, setTicker] = useState([])

  const fetchData = () => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setTicker(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [], 5000)

  return (
    <div className={style.container}>
        {'OR SYMBOL' || <div key={ticker.symbol}>{ticker.symbol}</div>}
    </div>
  )
}

export default StockTicker

