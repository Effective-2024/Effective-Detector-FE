import { Switch } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import ContentBox from '~/components/ContentBox';
import PerformanceStatistics from '~/components/Statistic/PerformanceStatistics';
import StatisticBarChart from '~/components/Statistic/StatisticBarChart';
import PageCenterTitle from '~/components/Typography/PageCenterTitle';

const Statistic = () => {
  return (
    <>
      <PageCenterTitle title="국내 낙상사고 통계" />
      <ContentBox title="사고 통계">
        <div className="flex flex-col gap-8 lg:flex-row">
          <StatisticBarChart />
          <PerformanceStatistics />
        </div>
      </ContentBox>
      <ContentBox title="사고 이력">
        <div className="flex items-center">
          <label>오작동 사고 포함</label>
          <Switch />
        </div>
        <DataGrid columns={[]} />
      </ContentBox>
    </>
  );
};

export default Statistic;
