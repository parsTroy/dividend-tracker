import React, { useEffect, useState } from "react"
import style from './StockPrice.module.css';

const StockPrice = () => {
  
  // const url = 'https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=0b92bda5d2f297a72d359be292be3991';
  const url2 = 'https://6300f6439a1035c7f8fb8068.mockapi.io/api/div/stock-data';

  const [price, setPrice] = useState([])

  const fetchData = () => {
    fetch(url2) // URL TO USE
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

  console.log(price[0] && price[0].price);

  return (
    <div className={style.container}>
      {/* {'OR PRICE' || <div key={price[0].price}>{price[0].price}</div>} // REAL API */}
      {price[0] && <div key={price[0].price}>{price[0].price}</div>}
    </div>
  )
}

export default StockPrice
