import React from "react";
import { Pie, Doughnut, Line, Bar } from "react-chartjs-2";
import "./App.css";

const labels = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
const datasets = [
  {
    label: "Vendas",
    backgroundColor: [
      "#B21F00",
      "#C9DE00",
      "#2FDE00",
      "#00A6B4",
      "#5200B4",
      "#6800B4",
      "#c900B4",
      "#DC851F",
      "#92140C",
      "#17A398",
      "#F38D68",
      "#F1E9DB",
      "#07020D",
    ],
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 1,
    data: [65, 59, 80, 81, 56, 75, 96, 26, 48, 12, 78, 54],
  },
];

const dataLine = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Vendas",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Indicações",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

const options = {
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
};

const App = () => {
  return (
    <div className="container">
      <div className="grid">
        <div className="canvasContainer">
          <Pie
            data={{ labels: labels, datasets: datasets }}
            options={{
              title: {
                display: true,
                text: "Média de Vendas por mês",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "bottom",
              },
            }}
          />
        </div>
        <div className="canvasContainer">
          <Doughnut
            data={{ labels: labels, datasets: datasets, options: options }}
            options={{
              title: {
                display: true,
                text: "Média de Vendas por mês",
                fontSize: 20,
              },
              legend: {
                display: false,
                position: "right",
              },
            }}
          />
        </div>
        <div className="canvasContainer">
          <Bar
            data={{ labels: labels, datasets: datasets }}
            options={{
              title: {
                display: true,
                text: "Média de Vendas por mês",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
        <div className="canvasContainer">
          <Bar
            data={{ labels: labels, datasets: datasets }}
            options={{
              ...options,
              title: {
                display: true,
                text: "Média de Vendas por mês",
                fontSize: 20,
              },
              legend: {
                display: false,
                position: "right",
              },
            }}
          />
        </div>

        <div className="canvasContainer">
          <Line
            data={dataLine}
            options={{
              title: {
                display: false,
                text: "Média de Vendas por mês",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "top",
              },
              scales: {
                xAxes: [
                  {
                    gridLines: {
                      display: false,
                    },
                  },
                ],
                yAxes: [
                  {
                    gridLines: {
                      display: false,
                    },
                  },
                ],
              },
            }}
          />
        </div>
        <div className="canvasContainer">
          <Line
            data={dataLine}
            options={{
              title: {
                display: false,
                text: "Média de Vendas por mês",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "top",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
