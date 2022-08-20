import React, { useEffect, useState } from "react"
import style from './StockPrice.module.css';

const StockPrice = () => {
  
  const url = 'https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=0b92bda5d2f297a72d359be292be3991';

  const [price, setPrice] = useState([])

  const fetchData = () => {
    fetch(url)
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

  return (
    // <div>Hello</div>
    <div className={style.container}>
      <div key={price[0].price}>{price[0].price}</div>
    </div>
  )
}

export default StockPrice
