import { FC } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  ChartOptions,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip);

type PieChartProps = {
  numberProject: number,
    numberResearch: number,
    numberSeminar: number,
    numberCertificate: number,
};



const options: ChartOptions<'doughnut'> = {
  responsive: true,
    // Correct aspect ratio setting
  plugins: {
    tooltip: {
      enabled: true,
    },
  },
  layout: {
    padding: {
      bottom: 20,  // Add padding at the bottom if needed
    },
  },
  animation: {
    animateScale: true,
  },
};

const PieChart: FC<PieChartProps> = ({numberProject,numberResearch,numberSeminar,numberCertificate}) => {

  const data = {
    datasets: [
      {
        data: [numberProject, numberSeminar, numberResearch, numberCertificate],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(155, 215, 86)",
        ],
        hoverOffset: 4,
      },
    ],
    labels: ["Project", "Seminar", "Research", "Certificate"],
  };

  return <Doughnut data={data} options={options} />;
};

export default PieChart;
