export const QueryKeys = {
  EXIST_MEMBER_ID: (loginId: string) => ['exist-member-id', loginId],
  MY_INFORMATION: ['my-information'],
  HOSPITAL_STATISTIC: (hospitalId: number) => [
    'hospital-statistic',
    hospitalId,
  ],
  GLOBAL_STATISTIC_BY_YEAR: ['global-statistic-by-year'],
  GLOBAL_STATISTIC_BY_MONTH: (year: string) => [
    'global-statistic-by-month',
    year,
  ],
  GLOBAL_STATISTIC_YEAR: ['global-statistic-year'],
  HOSPITAL_STATISTIC_BY_YEAR: (hospitalId: number) => [
    'hospital-statistic-by-year',
    hospitalId,
  ],
  HOSPITAL_STATISTIC_BY_MONTH: (year: string, hospitalId: number) => [
    'hospital-statistic-by-month',
    year,
    hospitalId,
  ],
  HOSPITAL_STATISTIC_YEAR: (hospitalId: number) => [
    'hospital-statistic-year',
    hospitalId,
  ],
  GLOBAL_PERFORMANCE_STATISTIC: ['perforce-statistic'],
  HOSPITAL_PERFORMANCE_STATISTIC: (hospitalId: number) => [
    'hospital-perforce-statistic',
    hospitalId,
  ],
  ACCIDENT_INFORMATIONS: (pageNumber: number, pageSize: number) => [
    'accident-informations',
    pageNumber,
    pageSize,
  ],
  CAMERAS: (hospitalId: number) => ['cameras', hospitalId],
  MONITORS: (hospitalId: number) => ['monitors', hospitalId],
};
