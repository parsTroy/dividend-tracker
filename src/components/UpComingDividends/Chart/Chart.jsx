import React from "react";
// import style from './Chart.module.css';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const options = {
  plugins: {
    legend: {
      position: "top",
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "Scheduled Dividends",
      data: [32, 42, 51, 60, 51, 95, 52, 52, 62, 10, 39, 10],
      backgroundColor: "#3500D3",
      borderColor: "#3500D3",
    },
  ],
};



const Chart = () => {
  return (
        <div style={{ marginTop: 20, width: 930, height: 450, backgroundColor: "var(--tertiary-color)" }}>
            <Bar options={options} data={data} />
        </div>
    );
};

export default Chart;
