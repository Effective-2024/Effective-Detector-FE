import { useState } from 'react';
import { GroupByType, PeriodType, StatisticType } from '~/data/statistic';
import { useAppSelector } from '~/lib/hooks/redux';
import {
  useHospitalStatisticByMonthQuery,
  useHospitalStatisticByYearQuery,
  useHospitalStatisticYearQuery,
} from '~/lib/hooks/useApi';
import StatisticBarChart from './StatisticBarChart';

const HospitalStatisticBarChart = () => {
  const hospitalId = useAppSelector((state) => state.member).value
    .hospitalId?.[0];
  const [statisticType, setStatisticType] = useState<StatisticType>({
    period: PeriodType.YEAR,
    groupby: GroupByType.REASON,
    year: '-',
  });
  const { data: years } = useHospitalStatisticYearQuery(hospitalId);
  const { data: datasetByYear } = useHospitalStatisticByYearQuery(hospitalId, {
    enabled: statisticType.period === PeriodType.YEAR,
  });
  const { data: datasetByMonth } = useHospitalStatisticByMonthQuery(
    statisticType.year,
    hospitalId,
    {
      enabled: statisticType.period === PeriodType.MONTH,
    },
  );
  return (
    <StatisticBarChart
      statisticType={statisticType}
      setStatisticType={setStatisticType}
      years={years ?? []}
      datasetByYear={datasetByYear}
      datasetByMonth={datasetByMonth}
    />
  );
};

export default HospitalStatisticBarChart;
