import { useState } from 'react';
import { GroupByType, PeriodType, StatisticType } from '~/data/statistic';
import {
  useGlobalStatisticByMonthQuery,
  useGlobalStatisticByYearQuery,
  useGlobalStatisticYearQuery,
} from '~/lib/hooks/useApi';
import StatisticBarChart from './StatisticBarChart';

const GlobalStatisticBarChart = () => {
  const [statisticType, setStatisticType] = useState<StatisticType>({
    period: PeriodType.YEAR,
    groupby: GroupByType.REASON,
    year: '-',
  });
  const { data: years } = useGlobalStatisticYearQuery();
  const { data: datasetByYear } = useGlobalStatisticByYearQuery({
    enabled: statisticType.period === PeriodType.YEAR,
  });
  const { data: datasetByMonth } = useGlobalStatisticByMonthQuery(
    statisticType.year,
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

export default GlobalStatisticBarChart;
