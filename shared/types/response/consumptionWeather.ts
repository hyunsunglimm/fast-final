export type ConsumptionWeatherResponse = {
  name: string;
  used: number;
  weather: Weather[];
};

export type Weather = {
  weatherImageNo: number;
  weatherName: string;
  count: number;
};
