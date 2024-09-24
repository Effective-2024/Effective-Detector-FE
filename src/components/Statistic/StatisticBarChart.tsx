import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import { useState } from 'react';
import {
  GroupByType,
  PeriodType,
  barChartSeriesByReason,
  barChartSeriesByTotal,
  periodDataKey,
} from '~/data/statistic';
import {
  useGlobalStatisticByMonthQuery,
  useGlobalStatisticByYearQuery,
} from '~/lib/hooks/useApi';

const StatisticBarChart = () => {
  const [statisticType, setStatisticType] = useState<{
    period: PeriodType;
    groupby: GroupByType;
    year: string;
  }>({
    period: PeriodType.YEAR,
    groupby: GroupByType.REASON,
    year: '-',
  });
  const years = ['2024', '2023', '2022', '2021'];
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
    <div className="w-full min-w-[380px]">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <FormControl fullWidth className="max-w-[110px]">
            <InputLabel id="period-select-label">기간</InputLabel>
            <Select
              labelId="period-select-label"
              id="peiod-select"
              value={statisticType.period}
              label="기간"
              size="small"
              onChange={(e) => {
                const value = e.target.value as PeriodType;
                if (value === PeriodType.MONTH)
                  setStatisticType((prev) => {
                    return {
                      ...prev,
                      period: e.target.value as PeriodType,
                      year: years[0],
                    };
                  });
                else
                  setStatisticType((prev) => {
                    return {
                      ...prev,
                      period: e.target.value as PeriodType,
                      year: '-',
                    };
                  });
              }}
            >
              {Object.values(PeriodType).map((periodType) => (
                <MenuItem key={periodType} value={periodType}>
                  {periodType}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth className="max-w-[110px]">
            <InputLabel id="year-select-label">연도</InputLabel>
            <Select
              labelId="year-select-label"
              id="year-select"
              value={statisticType.year}
              label="연도"
              size="small"
              onChange={(e) =>
                setStatisticType((prev) => {
                  return {
                    ...prev,
                    year: e.target.value,
                  };
                })
              }
              disabled={statisticType.period !== PeriodType.MONTH}
            >
              {statisticType.period !== PeriodType.MONTH ? (
                <MenuItem value="-">-</MenuItem>
              ) : (
                years.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>
        </div>

        <FormControl fullWidth className="max-w-[110px]">
          <InputLabel id="groupby-select-label">그룹화 기준</InputLabel>
          <Select
            labelId="groupby-select-label"
            id="peiod-select"
            value={statisticType.groupby}
            label="그룹화 기준"
            size="small"
            onChange={(e) =>
              setStatisticType((prev) => {
                return {
                  ...prev,
                  groupby: e.target.value as GroupByType,
                };
              })
            }
          >
            {Object.values(GroupByType).map((groupbyType) => (
              <MenuItem key={groupbyType} value={groupbyType}>
                {groupbyType}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <BarChart
          xAxis={[
            {
              dataKey: periodDataKey[statisticType.period],
              scaleType: 'band',
            },
          ]}
          yAxis={[{ label: '건 수(건)' }]}
          series={
            statisticType.groupby === GroupByType.REASON
              ? barChartSeriesByReason
              : barChartSeriesByTotal
          }
          dataset={
            (statisticType.period === PeriodType.YEAR
              ? datasetByYear
              : datasetByMonth) ?? [{}]
          }
          height={300}
        />
      </div>
    </div>
  );
};

export default StatisticBarChart;