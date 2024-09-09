import { Button } from '@mui/material';
import { Navigate } from 'react-router-dom';
import ContentBox from '~/components/ContentBox';
import PageCenterTitle from '~/components/Typography/PageCenterTitle';
import { useAppDispatch, useAppSelector } from '~/lib/hooks/redux';
import { logout } from '~/store/member.slice';

const MyPage = () => {
  const member = useAppSelector((state) => state.member).value;
  const dispatch = useAppDispatch();
  const myInformation = {
    hospital: {
      name: '행복 요양병원',
      address: '부산광역시 금정구 62번길 2',
      tel: '010-1234-5678',
      type: '병원',
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
      <PageCenterTitle title="계정 정보 조회" />
      <div className="flex gap-8">
        <ContentBox title="내 병원 정보">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <p className="text-base font-bold">
                {myInformation.hospital.name}
              </p>
              <span className="rounded-md bg-comment px-4 py-1 text-xs text-white">
                {myInformation.hospital.type}
              </span>
            </div>
            <div>
              <p className="mb-2 text-sm">{myInformation.hospital.address}</p>
              <p className="text-sm">Tel: {myInformation.hospital.tel}</p>
            </div>
          </div>
        </ContentBox>
        <ContentBox title="계정 관리자 정보">
          <div className="flex flex-col items-start gap-4">
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
        </ContentBox>
      </div>
      <ContentBox title="계정 관리" titleCenter>
        <div className="flex justify-center gap-8">
          <Button
            size="large"
            variant="outlined"
            color="error"
            onClick={() => dispatch(logout())}
          >
            로그아웃
          </Button>
          <Button size="large" variant="contained" color="error">
            회원탈퇴
          </Button>
        </div>
      </ContentBox>
    </>
  );
};

export default MyPage;
