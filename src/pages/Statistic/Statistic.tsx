import ContentBox from '~/components/ContentBox';
import AccidentInformations from '~/components/Statistic/AccidentInformations';
import GlobalPerformanceStatistics from '~/components/Statistic/GlobalPerformanceStatistics';
import GlobalStatisticBarChart from '~/components/Statistic/GlobalStaticBarChart';
import PageCenterTitle from '~/components/Typography/PageCenterTitle';

const Statistic = () => {
  return (
    <>
      <PageCenterTitle title="국내 낙상사고 통계" />
      <ContentBox title="사고 통계">
        <div className="flex flex-col gap-8 lg:flex-row">
          <GlobalStatisticBarChart />
          <GlobalPerformanceStatistics />
        </div>
      </ContentBox>
      <ContentBox title="사고 이력">
        <AccidentInformations />
      </ContentBox>
    </>
  );
};

export default Statistic;
