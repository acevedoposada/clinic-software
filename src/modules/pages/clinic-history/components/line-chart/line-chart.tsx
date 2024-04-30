/* eslint-disable @typescript-eslint/no-explicit-any */
import { faker } from '@faker-js/faker';
import { Line } from 'react-chartjs-2';
import { useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const labels = ['January', 'February', 'March', 'April', 'May'];

const datasets = [
  {
    label: 'Pacientes por Mes',
    data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
    fill: 'start',
    // backgroundColor: (context: ScriptableContext<'line'>) => {
    //   const ctx = context.chart.ctx;
    //   const gradient = ctx.createLinearGradient(
    //     0,
    //     0,
    //     0,
    //     context.chart.chartArea.height
    //   );
    //   gradient.addColorStop(0, 'rgb(255, 99, 132, 0.5)');
    //   gradient.addColorStop(1, 'rgba(255,255,255,0)');
    //   gradient.addColorStop(2, 'rgba(255,255,255,0)');
    //   return gradient;
    // },
    borderColor: 'rgb(255, 99, 132)',
  },
];

export const options = {
  responsive: true,
  dataLineChart: datasets,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0.5,
      borderWidth: 4,
    },
    point: { radius: 0 },
  },
  scales: {
    y: {
      grid: { lineWidth: 0 },
      ticks: { display: false },
      border: { width: 0 },
    },
    x: {
      grid: { lineWidth: 0 },
      ticks: { display: false },
      border: { width: 0 },
    },
  },
};

const LineChart = () => {
  const chartRef = useRef();

  return <Line ref={chartRef} data={{ datasets, labels }} options={options} />;
};

export default LineChart;
