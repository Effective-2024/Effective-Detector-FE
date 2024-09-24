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
  PERFORMANCE_STATISTIC: ['perforce-statistic'],
};
