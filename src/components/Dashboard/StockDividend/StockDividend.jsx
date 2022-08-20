import React, { useEffect, useState } from "react"
import style from './StockDividend.module.css';

const StockDividend = () => {
  
  // const url = 'https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=0b92bda5d2f297a72d359be292be3991';
  const url2 = 'https://6300f6439a1035c7f8fb8068.mockapi.io/api/div/stock-data';

  const [dividend, setdividend] = useState([])

  const fetchData = () => {
    fetch(url2) // URL TO USE
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
    <div className={style.container}>
      {/* {'OR DIVIDEND' || <div key={dividend.historical}>{dividend.historical}</div>} // REAL URL */}
      {'BROKE' || <button key={dividend[0].dividend}>{dividend[0].dividend}</button>}
    </div>
  )
}

export default StockDividend;