import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartData,
  ChartOptions,
  ChartDatasetProperties,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

type Props = {};

//Data
const income: number[] = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
const expenses: number[] = [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25];
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

// Chart Options
const mydata = {
  labels: months,
  datasets: [
    // Each line
    {
      label: "Income",
      data: income,
      tension: 0.5,
      fill: true,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      pointRadius: 5,
      pointBorderColor: "rgba(255, 99, 132)",
      pointBackgroundColor: "rgba(255, 99, 132)",
    },
    {
      label: "Expenses",
      data: expenses,
      borderColor: "rgba(0, 220, 195, 0.5)",
    },
  ],
};

const myoptions = {
  scales: {
    y: {
      min: 0,
    },
    x: {
      ticks: { color: "rgb(255, 99, 132)" },
    },
  },
};

const LinesChart = (props: Props) => {
  return <Line data={mydata} options={myoptions} />;
};

export default LinesChart;
