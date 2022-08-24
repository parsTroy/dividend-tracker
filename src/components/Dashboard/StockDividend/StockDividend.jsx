import React, { useEffect, useState } from "react"
import style from './StockDividend.module.css';

const StockDividend = () => {
  
  const url = 'https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/QYLD?apikey=0b92bda5d2f297a72d359be292be3991';
  // const url2 = 'https://6300f6439a1035c7f8fb8068.mockapi.io/api/div/stock-data';

  const [dividends, setdividend] = useState([])

  const fetchData = () => {
    fetch(url) // URL TO USE
      .then(response => {
        return (response.json());
      })
      .then(data => {
        setdividend(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(dividends.historical && dividends.historical[0].dividend);

  return (
    <div className={style.container}>
      {dividends.historical && <div key={dividends.historical[0].dividend}>{dividends.historical[0].dividend}</div>}
      {/* {dividend[0] && <div key={dividend[0].dividend}>{dividend[0].dividend}</div>} */}
    </div>
  )
}

export default StockDividend;