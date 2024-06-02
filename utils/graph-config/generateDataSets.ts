import { ChartData, ChartDataset, ChartTypeRegistry } from 'chart.js';

export type DoughnutChartDataset = ChartDataset<'doughnut'>;
export type BarChartDataset = ChartDataset<'bar'>;

/**
 *
 * @param labels 그래프 라벨
 * @param datasets 그래프 데이터
 * @returns
 */
export const generateChartData = <TType extends keyof ChartTypeRegistry = keyof ChartTypeRegistry>(
  labels: string[],
  datasets: ChartDataset<TType>[]
): ChartData<TType> => {
  return {
    labels,
    datasets
  };
};
