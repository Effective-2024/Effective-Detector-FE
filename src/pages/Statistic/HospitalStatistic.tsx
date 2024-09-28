import ContentBox from '~/components/ContentBox';
import AccidentInformations from '~/components/Statistic/AccidentInformations';
import HospitalStatisticBarChart from '~/components/Statistic/HospitalStaticBarChart';
import PerformanceStatistics from '~/components/Statistic/PerformanceStatistics';
import PageCenterTitle from '~/components/Typography/PageCenterTitle';
import { useAppSelector } from '~/lib/hooks/redux';

const HospitalStatistic = () => {
  const member = useAppSelector((state) => state.member).value;

  return (
    <>
      <PageCenterTitle title={`${member.name} 낙상사고 통계`} />
      <ContentBox title="사고 통계">
        <div className="flex flex-col gap-8 lg:flex-row">
          <HospitalStatisticBarChart />
          <PerformanceStatistics />
        </div>
      </ContentBox>
      <ContentBox title="사고 이력">
        <AccidentInformations />
      </ContentBox>
    </>
  );
};

export default HospitalStatistic;
