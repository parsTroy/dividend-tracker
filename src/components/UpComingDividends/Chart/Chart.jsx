// import React, { useEffect, useState } from "react";
// // import style from './Chart.module.css';

// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//   } from "chart.js";
//   import { Bar } from "react-chartjs-2";

//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
//   );

//   const labels = ["Aug", "Sep", "Oct"];

// const options = {
//   plugins: {
//     legend: {
//       position: "top",
//     },
//   },
// };

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Scheduled Dividends (Three Months)",
//       data: [32, 42, 51],
//       backgroundColor: "#3500D3",
//       borderColor: "#3500D3",
//     },
//   ],
// };



// const Chart = () => {

//   const url = 'https://financialmodelingprep.com/api/v3/stock_dividend_calendar?from=2020-06-01&to=2020-09-10&apikey=0b92bda5d2f297a72d359be292be3991';

//   const [dividendData, setDividendData] = useState([])

//   const fetchData = () => {
//     fetch(url) // URL TO USE
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         setDividendData(data)
//       })
//   }

//   useEffect (() => {
//     fetchData()
//   }, [])

//   return (
//         <div style={{ marginTop: 20, width: 930, height: 450, backgroundColor: "var(--tertiary-color)" }}>
//             <Bar options={options} data={data} />
//         </div>
//     );
// };

// export default Chart;
