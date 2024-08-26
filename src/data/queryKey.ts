export const QueryKeys = {
  EXIST_MEMBER_ID: (loginId: string) => ['exist-member-id', loginId],
  MY_INFORMATION: ['my-information'],
  HOSPITAL_STATISTIC: (hospitalId: number) => [
    'hospital-statistic',
    hospitalId,
  ],
};
