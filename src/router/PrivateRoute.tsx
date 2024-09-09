import { Navigate } from 'react-router-dom';
import { useAppSelector } from '~/lib/hooks/redux';

// 로그인 상태를 확인하여 리디렉션을 처리하는 컴포넌트
const PrivateRoute = ({
  element,
  redirectTo,
}: {
  element: JSX.Element;
  redirectTo: string;
}) => {
  const isLoggedIn = useAppSelector((state) => state.member.value.isAuth);

  return isLoggedIn ? <Navigate to={redirectTo} /> : element;
};

export default PrivateRoute;
