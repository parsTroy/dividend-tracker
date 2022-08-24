import React, { useEffect, useState } from "react"
import style from './StockTicker.module.css';

const StockTicker = () => {

  const url = 'https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/QYLD?apikey=0b92bda5d2f297a72d359be292be3991';
  // const url2 = 'https://6300f6439a1035c7f8fb8068.mockapi.io/api/div/stock-data';

  const [ticker, setTicker] = useState([])

  const fetchData = () => {
    fetch(url) // URL TO USE
      .then(response => {
        return (
          response.json()
        );
      })
      .then(data => {
        setTicker(data)
        // data.forEach(v => {
        //   let tickersRaw = [];
        //   let tickerUnSort = [];
        //   for(let i = 0; i<v.ticker.length; i++) {
        //     tickersRaw.push(v.ticker[i]);
        //     for(let j = 1; j<tickersRaw.length; j++){
        //       tickerUnSort.push(tickersRaw[j]);
        //       console.log(tickerUnSort);
        //     }
        //   }
        // })
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  // console.log(ticker.symbol && ticker.symbol);

  return (
    <div className={style.container}>
        {ticker.symbol && <div key={ticker.symbol}>{ticker.symbol}</div>}
        {/* {ticker[0] && <div key={ticker[0].ticker}>{ticker[0].ticker}</div>} */}
    </div>
  )
}

export default StockTicker

