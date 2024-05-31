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

const options: ChartOptions<'doughnut'> = {
  rotation: -90,
  circumference: 180,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      filter: (tooltip) => tooltip.dataIndex === 0,
      callbacks: {
        label: (item) => {
          const count = item.dataset.data[0];
          return `${count}점`;
        }
      }
    },

    filler: {
      drawTime: 'beforeDraw'
    }
  }
};
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
  cutout?: number;
};

const DoughnutChart = ({ dataConfig, cutout }: DoughnutChartProps) => {
  const { labels, datasets } = dataConfig;
  const data: ChartData<'doughnut', number[], unknown> = {
    labels,
    datasets: [
      {
        data: datasets[0].data,
        backgroundColor: datasets[0].backgroundColor,
        borderWidth: 0,
        borderRadius: { innerEnd: 30, outerEnd: 30 },
        hoverBackgroundColor: datasets[0].hoverBackgroundColor
      }
    ]
  };
  return <Doughnut data={data} options={{ ...options, cutout }} plugins={[backgroundCircle]} />;
};
export default DoughnutChart;
