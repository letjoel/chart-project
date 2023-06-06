import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const income: number[] = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const myOptions = {
  responsive: true,
  animation: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      min: -25,
      max: 100,
    },
    x: {
      ticks: { color: "rgba(0, 220, 195)" },
    },
  },
};

const myData = {
  labels: months,
  datasets: [
    {
      label: "Income",
      data: income,
      backgroundColor: "rgba(0, 220, 195, 0.5)",
    },
  ],
};

type Props = {};

const BarsChart = (props: Props) => {
  return <Bar data={myData} options={myOptions} />;
};

export default BarsChart;
