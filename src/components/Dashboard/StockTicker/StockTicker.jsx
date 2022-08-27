import React, { useEffect, useState } from "react"
import style from './StockTicker.module.css';
import { data } from '../../../data';

const StockTicker = () => {

  // const url = `https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/${stickerArr}?apikey=0b92bda5d2f297a72d359be292be3991`;
  // // const url2 = 'https://6300f6439a1035c7f8fb8068.mockapi.io/api/div/stock-data';

  // const [ticker, setTicker] = useState([])

  // const fetchData = () => {
  //   fetch(url) // URL TO USE
  //     .then(response => {
  //       return (
  //         response.json()
  //       );
  //     })
  //     .then(data => {
  //       setTicker(data)
  //     })
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])



  // console.log(ticker.symbol && ticker.symbol);





  return (
    <ul className={style.container}>
      {/* {ticker.symbol && <div key={ticker.symbol}>{ticker.symbol}</div>} */}

      {/* {data.map((tickers) => {
        return <li>{tickers.ticker}</li>
      })} */}

    </ul>
  )
}

export default StockTicker

