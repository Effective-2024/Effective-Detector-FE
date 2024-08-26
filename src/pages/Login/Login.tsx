import { ReactComponent as Logo } from '@assets/logo/logo.svg';
import { useAppDispatch } from '@lib/hooks/redux';
import { Box, Button, TextField } from '@mui/material';
import { login } from '@store/member.slice';
import { Form, Formik, FormikHelpers } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '~/lib/hooks/useApi';

interface LoginInfo {
  id: string;
  password: string;
}

const initialValues: LoginInfo = {
  id: '',
  password: '',
};

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { mutate: getMemberAuth } = useLogin();

  const handleSubmit = (
    values: LoginInfo,
    { setSubmitting }: FormikHelpers<LoginInfo>,
  ) => {
    getMemberAuth(
      { loginId: values.id, loginPassword: values.password },
      {
        onSuccess: (data) => {
          dispatch(
            login({
              name: data?.name ?? '',
              memberId: data?.id ?? -1,
              role: data?.memberRole ?? 'ROLE_ANONYMOUS',
              token: 'token',
            }),
          );
          setSubmitting(false);
          setTimeout(() => {
            navigate('/');
          }, 0);
        },
        onError: () => {
          setSubmitting(false);
        },
      },
    );
  };

  return (
    <div className="mx-auto w-full max-w-sign">
      <div className="my-[88px] flex flex-col gap-6">
        <Logo />
        <Box className="py-4">
          <div>
            <p className="text-xl">로그인</p>
          </div>
          <div className="mt-2 border-b border-comment" />
        </Box>
        <div className="flex flex-col gap-8">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ isSubmitting, values, handleChange, handleBlur }) => (
              <Form className="flex flex-col gap-4">
                <TextField
                  type="text"
                  name="id"
                  label="ID"
                  value={values.id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextField
                  type="password"
                  name="password"
                  label="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <div className="flex flex-col">
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
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
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
