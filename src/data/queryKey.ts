export const QueryKeys = {
  EXIST_MEMBER_ID: (loginId: string) => ['exist-member-id', loginId],
  HOSPITAL_SEARCH: (keyword: string) => ['hospital-search', keyword],
  MY_INFORMATION: ['my-information'],
  HOSPITAL_STATISTIC: (hospitalId: number) => [
    'hospital-statistic',
    hospitalId,
  ],
};
