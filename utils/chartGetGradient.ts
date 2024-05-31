import { Chart } from 'chart.js';
export const getGradient = (chart: Chart, hover: boolean) => {
  const {
    ctx,
    chartArea: { left, right }
  } = chart;
  const gradientSegment = ctx.createLinearGradient(left, 0, right, 0);
  if (hover) {
    gradientSegment.addColorStop(0, '#ffbd94');
    gradientSegment.addColorStop(1, '#ff4d00');
    return gradientSegment;
  }
  gradientSegment.addColorStop(0, '#ffcdae');
  gradientSegment.addColorStop(1, '#ff6809');
  return gradientSegment;
};
