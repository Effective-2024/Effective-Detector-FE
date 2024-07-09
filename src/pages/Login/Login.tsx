import { useAppDispatch } from '@lib/hooks/redux';
import { login } from '@store/member.slice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <h1>
      Login
      <button
        onClick={() => {
          //TODO - 로그인 API 연결
          dispatch(
            login({
              name: '행복 요양병원',
              memberId: 1,
              token: 'token',
              isModerator: false,
            }),
          );
          setTimeout(() => {
            navigate('/');
          }, 0);
        }}
      >
        로그인하기
      </button>
    </h1>
  );
};

export default Login;
