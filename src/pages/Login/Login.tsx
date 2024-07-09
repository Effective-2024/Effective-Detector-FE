import { useAppDispatch } from '@lib/hooks/redux';
import { login } from '@store/member.slice';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '@assets/logo/logo.svg';
import { Box, Button, TextField } from '@mui/material';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div className="max-w-sign mx-auto w-full">
      <div className="my-[88px] flex flex-col gap-6">
        <Logo />
        <Box className="py-4">
          <div>
            <p className="text-xl">로그인</p>
          </div>
          <div className="mt-2 border-b border-comment" />
        </Box>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <TextField type="text" label="ID" />
            <TextField type="password" label="Password" />
          </div>
          <div className="flex flex-col">
            <Button
              type="submit"
              variant="contained"
              size="large"
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
              로그인
            </Button>
            <div className="mt-3 flex justify-center gap-6 text-comment">
              Safe Catcher에 등록되어 있지 않나요?
              <Link to="/sign-up" className="font-bold underline">
                회원가입하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
