// interface GlobalStatisticDatasetDto {
//   slipping: number;
//   fighting: number;
//   poorFacilities: number;
//   carelessness: number;
//   etc: number;
//   total: number;
//   month?: string;
//   year?: string;
// }

export const mockDatasetByMonth = [
  {
    slipping: 5,
    fighting: 5,
    poorFacilities: 6,
    carelessness: 0,
    etc: 2,
    total: 18,
    month: '1월',
  },
  {
    slipping: 9,
    fighting: 5,
    poorFacilities: 8,
    carelessness: 4,
    etc: 2,
    total: 28,
    month: '2월',
  },
  {
    slipping: 5,
    fighting: 7,
    poorFacilities: 6,
    carelessness: 0,
    etc: 2,
    total: 20,
    month: '3월',
  },
  {
    slipping: 9,
    fighting: 5,
    poorFacilities: 6,
    carelessness: 4,
    etc: 2,
    total: 26,
    month: '4월',
  },
  {
    slipping: 9,
    fighting: 7,
    poorFacilities: 8,
    carelessness: 4,
    etc: 1,
    total: 29,
    month: '5월',
  },
  {
    slipping: 5,
    fighting: 5,
    poorFacilities: 6,
    carelessness: 0,
    etc: 1,
    total: 17,
    month: '6월',
  },
  {
    slipping: 9,
    fighting: 5,
    poorFacilities: 6,
    carelessness: 4,
    etc: 2,
    total: 26,
    month: '7월',
  },
  {
    slipping: 5,
    fighting: 5,
    poorFacilities: 8,
    carelessness: 4,
    etc: 2,
    total: 24,
    month: '8월',
  },
  {
    slipping: 5,
    fighting: 7,
    poorFacilities: 8,
    carelessness: 4,
    etc: 2,
    total: 26,
    month: '9월',
  },
  {
    slipping: 9,
    fighting: 7,
    poorFacilities: 6,
    carelessness: 0,
    etc: 2,
    total: 24,
    month: '10월',
  },
  {
    slipping: 9,
    fighting: 7,
    poorFacilities: 6,
    carelessness: 4,
    etc: 1,
    total: 27,
    month: '11월',
  },
  {
    slipping: 5,
    fighting: 5,
    poorFacilities: 8,
    carelessness: 4,
    etc: 2,
    total: 24,
    month: '12월',
  },
];
export const mockDatasetByYear = [
  {
    slipping: 5,
    fighting: 5,
    poorFacilities: 6,
    carelessness: 0,
    etc: 2,
    total: 18,
    year: '2021',
  },
  {
    slipping: 9,
    fighting: 5,
    poorFacilities: 8,
    carelessness: 4,
    etc: 2,
    total: 28,
    year: '2022',
  },
  {
    slipping: 5,
    fighting: 7,
    poorFacilities: 6,
    carelessness: 0,
    etc: 2,
    total: 20,
    year: '2023',
  },
  {
    slipping: 9,
    fighting: 5,
    poorFacilities: 6,
    carelessness: 4,
    etc: 2,
    total: 26,
    year: '2024',
  },
];

export enum PeriodType {
  YEAR = '연간',
  MONTH = '월간',
}
export enum GroupByType {
  REASON = '원인별',
  TOTAL_COUNT = '총 건수별',
}

export const periodDataKey = {
  [PeriodType.YEAR]: 'year',
  [PeriodType.MONTH]: 'month',
};

const valueFormatter = (value: number | null) => {
  return `${value}건`;
};

export const barChartSeriesByReason = [
  {
    dataKey: 'slipping',
    label: '미끄러짐',
    valueFormatter,
  },
  {
    dataKey: 'fighting',
    label: '환자 간 다툼',
    valueFormatter,
  },
  {
    dataKey: 'poorFacilities',
    label: '시설 부실',
    valueFormatter,
  },
  {
    dataKey: 'carelessness',
    label: '의료진 부주의',
    valueFormatter,
  },
  {
    dataKey: 'etc',
    label: '기타',
    valueFormatter,
  },
];
export const barChartSeriesByTotal = [
  {
    dataKey: 'total',
    label: '총 건수',
    valueFormatter,
  },
];
