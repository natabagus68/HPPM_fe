import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const ChartLinePoint = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Data",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "white",
        borderColor: "#12B569",
        pointBackgroundColor: "white",
        pointBorderColor: "#12B569",
        pointRadius: 5,
        pointHoverRadius: 5,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div>
      <Line data={data} options={options} height={43} />
    </div>
  );
};

export default ChartLinePoint;
