'use client';
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Title,
  CategoryScale,
  LinearScale,
  Legend,
  ChartOptions,
  Plugin,
  ChartData
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

type BarChartProps = {
  dataConfig: ChartData<'bar'>;
  options: ChartOptions<'bar'>;
  plugins?: Plugin<'bar'>;
};

const BarChart = ({ dataConfig, options, plugins }: BarChartProps) => {
  const Plugin = plugins ?? { id: 'null' };
  return <Bar data={dataConfig} options={options} plugins={[Plugin]} />;
};

export default BarChart;
