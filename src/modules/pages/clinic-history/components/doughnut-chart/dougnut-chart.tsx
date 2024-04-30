import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

const labels = ['Nuevos', 'Recurrentes'];
const datasets = [
  {
    label: 'Pacientes',
    data: [16, 200],
    backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 255, 255, 0.2)'],
    borderWidth: 0,
  },
];

const DoughnutChart = ({ className }: { className?: string }) => {
  return <Doughnut className={className} data={{ datasets, labels }} />;
};

export default DoughnutChart;
