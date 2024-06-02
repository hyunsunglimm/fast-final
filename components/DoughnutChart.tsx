'use client';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  Plugin,
  ChartData
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const backgroundCircle: Plugin<'doughnut'> = {
  id: 'backgroundCircle',
  beforeDatasetDraw: (chart) => {
    const { ctx } = chart;
    ctx.save();

    const meta = chart.getDatasetMeta(0);
    if (meta.data.length > 0) {
      const firstPoint = meta.data[0];
      const xCoor = firstPoint.x;
      const yCoor = firstPoint.y;
      const innerRadius = (firstPoint as ArcElement).innerRadius;
      const outerRadius = (firstPoint as ArcElement).outerRadius;
      const width = outerRadius - innerRadius;
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.strokeStyle = '#edf0f3';
      ctx.arc(xCoor, yCoor, outerRadius - width / 2, Math.PI, Math.PI * 2);
      ctx.stroke();
    }
  }
};

type DoughnutChartProps = {
  dataConfig: ChartData<'doughnut'>;
  options: ChartOptions<'doughnut'>;
  plugins?: Plugin<'doughnut'>;
};

const DoughnutChart = ({ dataConfig, options, plugins }: DoughnutChartProps) => {
  const Plugin = plugins ?? { id: 'null' };
  return (
    <Doughnut
      id='doughnut'
      data={dataConfig}
      options={options}
      plugins={[backgroundCircle, Plugin]}
    />
  );
};
export default DoughnutChart;
