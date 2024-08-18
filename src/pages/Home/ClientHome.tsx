import PageTitle from '@components/Typography/PageTitle';

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
            <div className="flex flex-grow flex-col items-center justify-center gap-9 rounded bg-background-comment text-lg font-bold">
              {accident ? (
                <>
                  <div className="text-danger">
                    <b>{"'404호 일반실'"}</b> 카메라에서 낙상사고가
                    감지되었습니다.
                  </div>
                  <div className="flex gap-6 text-xs font-medium">
                    <button className="w-[100px] rounded bg-secondary-light py-2 text-white transition-colors hover:bg-secondary">
                      조치 완료
                    </button>
                    <button className="w-[100px] rounded bg-gray-300 py-2 transition-colors hover:bg-gray-400">
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
            <div className="h-[183px] w-[336px] rounded bg-gray-400" />
            <div className="flex flex-1 flex-grow flex-col items-center justify-center gap-4">
              <div className="">
                <p className="w-[266px] rounded py-4 text-center text-lg font-bold text-secondary">
                  이번 연도 누적 사고 건 수{' '}
                  <span className="text-primary">{4}</span>건
                </p>
                <ul className="w-full list-disc">
                  <li>
                    2023년 대비 <b>{30}%</b> 감소
                  </li>
                  <li>
                    전국 병원 평균치 대비 <b>{30}%</b> 낮음
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientHome;
