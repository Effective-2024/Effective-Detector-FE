import ContentBox from '~/components/ContentBox';
import AccidentInformations from '~/components/Statistic/AccidentInformations';
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
        <AccidentInformations />
      </ContentBox>
    </>
  );
};

export default Statistic;