// // const apiKey = "0b92bda5d2f297a72d359be292be3991";

// export const dividendAmount = () => {
//     Axios.get("https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/AAPL?apikey=0b92bda5d2f297a72d359be292be3991").then(
//         (response) => {
//             console.log("pressed!")
//             let dividendAmountValue = response.data.historical[0].dividend;
//             return dividendAmountValue;
//         }
//     );
// };

// const url = 'https://financialmodelingprep.com/api/v3/quote-short/QYLD?apikey=0b92bda5d2f297a72d359be292be3991';

// let setPrice = [];
// let price = [];
// let priceValueReal;

// export const fetchData = () => {
//     fetch(url) // URL TO USE
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         setPrice(data)
//       })
//   }

export const data = [{
    "id": 1,
    "ticker": "CRVS",
    "price": "$53.52",
    "change": 0.73,
    "yield": 0.141,
    "safety": 'true'
  }, {
    "id": 2,
    "ticker": "NAC",
    "price": "$11.86",
    "change": 8.08,
    "yield": 0.711,
    "safety": 'false'
  }, {
    "id": 3,
    "ticker": "NZF",
    "price": "$17.20",
    "change": 2.23,
    "yield": 0.434,
    "safety": "false"
  }, {
    "id": 4,
    "ticker": "SPLS",
    "price": "$62.56",
    "change": 9.06,
    "yield": 0.409,
    "safety": "true"
  }, {
    "id": 5,
    "ticker": "AGO^B",
    "price": "$113.85",
    "change": 7.42,
    "yield": 0.169,
    "safety": "false"
  }, {
    "id": 6,
    "ticker": "ESRX",
    "price": "$78.77",
    "change": 0.45,
    "yield": 0.102,
    "safety": "false"
  }, {
    "id": 7,
    "ticker": "ESCA",
    "price": "$132.31",
    "change": 2.24,
    "yield": 0.538,
    "safety": "true"
  }, {
    "id": 8,
    "ticker": "BTO",
    "price": "$130.00",
    "change": 2.41,
    "yield": 0.636,
    "safety": "true"
  }, {
    "id": 9,
    "ticker": "DNOW",
    "price": "$152.63",
    "change": 8.36,
    "yield": 0.283,
    "safety": "false"
  }, {
    "id": 10,
    "ticker": "KE",
    "price": "$72.14",
    "change": 9.9,
    "yield": 0.035,
    "safety": "false"
  }, {
    "id": 11,
    "ticker": "AAPL",
    "price": "$142.93",
    "change": 4.35,
    "yield": 0.213,
    "safety": "false"
  }, {
    "id": 12,
    "ticker": "QYLD",
    "price": "$14.63",
    "change": 3.35,
    "yield": 0.483,
    "safety": "true"
  }, {
    "id": 13,
    "ticker": "ET",
    "price": "$10.63",
    "change": 2.36,
    "yield": 0.693,
    "safety": "true"
  }]