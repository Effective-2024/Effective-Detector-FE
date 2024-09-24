import { Chip } from '@mui/material';
import { usePerformanceStatisticQuery } from '~/lib/hooks/useApi';
import CircleBadge from './CircleBadge';

const PerformanceStatistics = () => {
  const { data: performanceStatistic } = usePerformanceStatisticQuery();
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex w-full max-w-[347px] flex-col items-center justify-center gap-4">
      <Chip
        label={`${currentYear} 누적 사고 건 수 ${performanceStatistic?.totalAccidentCount}건`}
        variant="filled"
        color="primary"
        sx={{ color: 'white' }}
      />
      <div className="flex gap-4 lg:flex-col ">
        <div className="flex justify-center gap-4">
          <CircleBadge
            title={`${currentYear - 1}년 대비`}
            content={`${Math.abs(performanceStatistic?.increaseRateByLastYear ?? 0).toFixed(1)}%${(performanceStatistic?.increaseRateByLastYear ?? 0) < 0 ? '감소' : '증가'}`}
          />
          <CircleBadge
            title={`사고 감지 정확도`}
            content={`${performanceStatistic?.detectionAccuracy.toFixed(1)}%`}
          />
        </div>
        <div className="flex justify-center gap-4">
          <CircleBadge
            title={`${currentYear} 주 사고원인`}
            content={performanceStatistic?.primaryReason.content ?? ''}
          />
          <CircleBadge
            title={`최다 사고 발생 월`}
            content={`${performanceStatistic?.mostAccidentsOrccuredMonth}월`}
          />
          <CircleBadge
            title={`최다 사고 발생 연도`}
            content={`${performanceStatistic?.mostAccidentsOrccuredYear}년`}
          />
        </div>
      </div>
    </div>
  );
};

export default PerformanceStatistics;
