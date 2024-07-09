import PageTitle from '@components/Typography/PageTitle';
import CircleBadge from '@components/Statistic/CircleBadge';

const ClientHome = () => {
  const accident = null;
  return (
    <>
      <PageTitle title="Dashboard" />
      <div className="mt-9 flex flex-col gap-12">
        <div>
          <p className="mb-5 font-bold">사고가 감지된 병실</p>
          <div className="flex h-[196px] gap-10">
            {accident && <div className="w-[300px] rounded bg-gray-400" />}
            <div className="bg-background-comment flex flex-grow flex-col items-center justify-center gap-9 rounded text-lg font-bold">
              {accident ? (
                <>
                  <div className="text-danger">
                    <b>{'404호 일반실'}</b>에서 낙상사고가 감지되었습니다.
                  </div>
                  <div className="flex gap-6 text-xs font-medium">
                    <button className="w-[100px] rounded bg-secondary py-2 text-white">
                      보고서 작성
                    </button>
                    <button className="w-[100px] rounded bg-gray-400 py-2">
                      오작동
                    </button>
                  </div>
                </>
              ) : (
                '사고가 감지된 병실이 없습니다.'
              )}
            </div>
          </div>
        </div>
        <div>
          <p className="mb-5 font-bold">사고 현황</p>
          <div className="flex justify-between">
            <div className="flex flex-grow flex-col items-center gap-6">
              <div className="flex w-full justify-between px-16">
                <CircleBadge title="오늘의 낙상 사고" content={`${4}건`} />
                <CircleBadge title="오늘의 낙상 사고" content={`${4}건`} />
                <CircleBadge title="오늘의 낙상 사고" content={`${4}건`} />
              </div>
              <div className="w-[266px] rounded bg-secondary py-4 text-center font-bold text-white">
                이번 연도 누적 사고 건 수{' '}
                <span className="text-primary">{4}</span>건
              </div>
            </div>
            <div className="w-[336px] rounded bg-gray-400" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientHome;
