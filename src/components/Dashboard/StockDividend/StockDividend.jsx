import React, { useEffect, useState } from "react"
import style from './StockDividend.module.css';

const StockDividend = () => {
  
  const url = 'https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=0b92bda5d2f297a72d359be292be3991';

  const [dividend, setdividend] = useState([])

  const fetchData = () => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setdividend(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>FIX THIS</div>
    // <div className={style.container}>
    //     <div key={dividend.historical}>{dividend.historical}</div>
    // </div>
  )
}

export default StockDividend;