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

import { GridColDef } from '@mui/x-data-grid';
import {
  AccidentInformationDto,
  AccidentInformationPageableDto,
} from '~/types/common.dto';

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

export const mockPerformanceStatistic = {
  totalAccidentCount: 82,
  primaryReason: {
    id: 1,
    content: '미끄러짐',
  },
  increaseRateByLastYear: 30.5,
  detectionAccuracy: 98.8,
  mostAccidentsOrccuredMonth: 8,
  mostAccidentsOrccuredYear: 2022,
};

export const mockAccidentInformations: AccidentInformationPageableDto = {
  totalPages: 3,
  totalElements: 13,
  size: 5,
  number: 1,
  sort: {
    empty: false,
    sorted: true,
    unsorted: false,
  },
  first: false, // 현재 페이지가 첫 페이지인지 여부
  last: false, // 현재 페이지가 마지막 페이지인지 여부
  pageable: '{"page":1,"size":5}', // 페이지 요청 정보 (JSON 형식)
  numberOfElements: 5, // 현재 페이지의 항목 수
  empty: false, // 현재 페이지가 비어 있는지 여부
  content: [
    {
      id: 1,
      date: '2024-08-01',
      type: {
        id: 1,
        content: '미끄러짐',
      },
      age: {
        id: 1,
        content: '10대',
      },
    },
    {
      id: 2,
      date: '2023-09-23',
      type: {
        id: 5,
        content: '오작동',
      },
      age: {
        id: 2,
        content: '20대',
      },
    },
    {
      id: 3,
      date: '2023-08-12',
      type: {
        id: 2,
        content: '환자 간 다툼',
      },
      age: {
        id: 6,
        content: '60~70대',
      },
    },
    {
      id: 4,
      date: '2022-10-02',
      type: {
        id: 1,
        content: '미끄러짐',
      },
      age: {
        id: 4,
        content: '40대',
      },
    },
    {
      id: 5,
      date: '2022-06-13',
      type: {
        id: 3,
        content: '시설 부주의',
      },
      age: {
        id: 5,
        content: '50대',
      },
    },
  ],
};

export const accidentDataGridColumns: GridColDef<AccidentInformationDto>[] = [
  { field: 'id', headerName: 'No', width: 90 },
  {
    field: 'date',
    headerName: '사고 발생 일자',
    flex: 1,
    valueGetter: (_, row) => row.date.replaceAll('-', '.'),
  },
  {
    field: 'type',
    headerName: '분류',
    flex: 1,
    valueGetter: (_, row) => row.type.content,
  },
  {
    field: 'age',
    headerName: '피해자 연령',
    type: 'number',
    flex: 1,
    headerAlign: 'left',
    align: 'left',
    valueGetter: (_, row) => row.age.content,
  },
];
