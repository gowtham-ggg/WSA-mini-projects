import CardLayout from "./ui/card-layout";
import Clock from "../assets/images/clock.svg";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import moment from "moment";

Chart.register(...registerables);

const LineChart = ({ timeHours, temperatureData }) => {
  const data = {
    labels: timeHours.map((hour) => `${hour}`),
    datasets: [
      {
        label: "Temperature (°C)",
        data: temperatureData,
        fill: false,
        borderColor: "#FFC355",
        pointRadius: 5,
        pointBackgroundColor: "#FFC355",
        pointHoverRadius: 8,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines for the x-axis
        },
        ticks: {
          color: "white", // Customize x-axis tick color
        },
        title: {
          display: true,
          text: "Hour",
          color: "white", // Customize x-axis label color
        },
        border: {
          color: "white", // Customize x-axis line color
        },
      },
      y: {
        grid: {
          display: false, // Hide grid lines for the y-axis
        },
        ticks: {
          color: "white", // Customize x-axis tick color
        },
        title: {
          display: true,
          text: "Temp.",
          color: "white", // Customize x-axis label color
        },
        border: {
          color: "white",
        },
      },
    },
    plugins: {
        legend: {
          display: false, // Ensure that legend is not displayed
        },
      },
  };

  return <Line data={data} options={chartOptions} />;
};

const TempGraph = ({hourlyData}) => {
  const timeHours = hourlyData?.length > 0 ? hourlyData.map((item)=>moment(new Date(item.date)).format("h:mm a")) : [];
  const temperatureData = hourlyData?.length > 0 ? hourlyData.map((item)=>Math.floor(item.values?.temperature2m)) : [];
  return (
    <CardLayout className="temp-graph-card-layout">
      <div className="flex items-center">
        <img src={Clock} />
        <p className="time-format-text">24-hour Forecast</p>
      </div>
      <LineChart timeHours={timeHours} temperatureData={temperatureData} />
    </CardLayout>
  );
};

export default TempGraph;
