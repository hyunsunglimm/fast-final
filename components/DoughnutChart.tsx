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
const TOTAL_CREDIT = 1000;
const MY_CREDIT = 880;
export const data = {
  labels: ['내 신용점수'],
  datasets: [
    {
      data: [MY_CREDIT, TOTAL_CREDIT - MY_CREDIT],
      backgroundColor: ['rgba(255, 159, 64, 1)', '#ddd'],
      borderWidth: 0,
      border: 0
    }
  ]
};

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
          if (item.label === '내 신용점수') {
            return ` ${count}점`;
          }
          return '';
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
      const innerRadius = (firstPoint as any).innerRadius; // 타입 캐스팅으로 오류 방지
      const outerRadius = (firstPoint as any).outerRadius; // 타입 캐스팅으로 오류 방지
      const width = outerRadius - innerRadius;
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineDashOffset = 500;
      ctx.strokeStyle = '#ddd';
      ctx.arc(xCoor, yCoor, outerRadius - width / 2, Math.PI, Math.PI * 2);
      ctx.stroke();
    }
  }
};

type DoughnutChartProps = {
  data: ChartData<'doughnut', number[], string>;
};

const DoughnutChart = () => <Doughnut data={data} options={options} plugins={[backgroundCircle]} />;
export default DoughnutChart;
