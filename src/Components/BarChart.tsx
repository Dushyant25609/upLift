import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, ChartOptions } from 'chart.js';


ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

export type Props = {
  numberProject: number,
    numberResearch: number,
    numberSeminar: number,
    numberCertificate: number,
}

const BarChart: React.FC<Props> = ({numberProject,numberResearch,numberSeminar,numberCertificate}) => {
  const data = {
    labels: ['Project', 'Seminars', 'Research', 'Certificates'],
    datasets: [
      {
        data: [numberProject, numberSeminar, numberResearch, numberCertificate],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: true,  // Maintain the 16:9 aspect ratio
    aspectRatio: 16 / 9,        // Set the aspect ratio
    plugins: {
      legend:{
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        display: false, // Hide the x-axis labels
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
      <Bar data={data} options={options} />
  );
};

export default BarChart;
