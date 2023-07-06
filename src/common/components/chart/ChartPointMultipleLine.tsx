import { Line } from "react-chartjs-2";

const ChartLinePointMultipleLine = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Data",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "white",
        borderColor: "#F9ED37",
        pointBackgroundColor: "white",
        pointBorderColor: "#F9ED37",
        pointRadius: 5,
        pointHoverRadius: 5,
        fill: false,
      },
      {
        label: "Data2",
        data: [9, 8, 13, 15, 4, 1],
        backgroundColor: "white",
        borderColor: "#F04438",
        pointBackgroundColor: "white",
        pointBorderColor: "#F04438",
        pointRadius: 5,
        pointHoverRadius: 5,
        fill: false,
      },
    ],
  };

  const options = {
    legend: {
      display: false, // Menghapus legenda (label kotak)
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div>
      <Line data={data} options={options} height={40} />
    </div>
  );
};

export default ChartLinePointMultipleLine;
