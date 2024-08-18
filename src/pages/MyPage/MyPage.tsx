import { Navigate } from 'react-router-dom';
import PageTitle from '~/components/Typography/PageTitle';
import { useAppSelector } from '~/lib/hooks/redux';

const MyPage = () => {
  const member = useAppSelector((state) => state.member).value;
  const myInformation = {
    hospital: {
      name: '행복 요양병원',
      address: '부산광역시 금정구 62번길 2',
      tel: '010-1234-5678',
      type: '병원',
      area: '부산',
    },
    admin: {
      id: 'admin',
      name: '관리자1',
      phoneNumber: '010-1234-5678',
    },
  };

  if (!member.isAuth) {
    alert('로그인이 필요합니다.');
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <PageTitle title="계정 정보 조회" />
      <div className="mt-9 flex flex-col items-center gap-9 rounded bg-background-comment p-6">
        <div className="flex w-full gap-6 text-lg">
          <div className="flex-grow">
            <p className="text-lg font-bold">내 병원 정보</p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <p className="text-base font-bold">
                {myInformation.hospital.area} | {myInformation.hospital.name}
              </p>

              <span className="rounded-md bg-secondary-light px-4 py-1 text-xs text-white">
                {myInformation.hospital.type}
              </span>

              <p className="text-sm">{myInformation.hospital.address}</p>
              <p className="text-sm">Tel: {myInformation.hospital.tel}</p>
            </div>
          </div>
          <div className="flex-grow">
            <p className="text-lg font-bold">계정 관리자 정보</p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <p className="flex text-sm">
                <b className="w-[6em]">ID</b>
                {myInformation.admin.id}
              </p>
              <p className="flex text-sm">
                <b className="w-[6em]">관리자 이름</b>
                {myInformation.admin.name}
              </p>
              <p className="flex text-sm">
                <b className="w-[6em]">전화번호</b>
                {myInformation.admin.phoneNumber}
              </p>
            </div>
          </div>
        </div>
        <button className="rounded bg-secondary-light px-4 py-2 text-white transition-colors hover:bg-secondary">
          정보 수정하기
        </button>
      </div>
    </>
  );
};

export default MyPage;
