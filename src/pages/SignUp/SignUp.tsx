import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '@assets/logo/logo.svg';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

const SignUp = () => {
  const navigate = useNavigate();
  const [hospitalType, setHospitalType] = useState<string>('');
  const [isDuplicationId, setIsDuplicationId] = useState<boolean | null>(null);
  return (
    <div className="max-w-sign mx-auto w-full">
      <div className="my-[88px] flex flex-col gap-6">
        <Logo />
        <Box className="py-4">
          <div>
            <p className="text-xl">회원가입</p>
          </div>
          <div className="mt-2 border-b border-comment" />
        </Box>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-xl">계정 정보</p>
            <div className="flex gap-2">
              <TextField
                type="text"
                label="아이디"
                className="flex-grow"
                error={isDuplicationId === true}
                helperText={
                  isDuplicationId !== null &&
                  (isDuplicationId
                    ? `이미 존재하는 아이디입니다.`
                    : '사용가능한 아이디입니다.')
                }
                FormHelperTextProps={{ sx: { color: 'success.main' } }}
                required
              />
              <Button
                type="button"
                color="secondary"
                variant="contained"
                onClick={() => {
                  //TODO - 중복체크 API 연결
                  setIsDuplicationId(true);
                }}
                className="h-[56px]"
              >
                중복 확인
              </Button>
            </div>
            <div className="flex gap-2">
              <TextField
                type="password"
                label="비밀번호"
                className="flex-grow"
                required
              />
              <TextField
                type="password"
                label="비밀번호 확인"
                className="flex-grow"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl">병원 정보</p>
            <div className="flex gap-2">
              <TextField
                type="text"
                label="병원명"
                className="flex-grow"
                disabled={true}
                required
              />
              <Button
                type="button"
                color="primary"
                variant="outlined"
                className="!min-w-[56px] max-w-[56px] !border-2"
              >
                <FaSearch className="h-9 w-9" />
              </Button>
            </div>
            <FormControl className="flex">
              <InputLabel id="hospital-type-label">병원 유형 *</InputLabel>
              <Select
                labelId="hospital-type-label"
                label="병원 유형 *"
                className="flex-grow"
                value={hospitalType}
                onChange={(e) => setHospitalType(e.target.value)}
                required
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl">관리자 정보</p>
            <div className="flex gap-2">
              <TextField
                type="text"
                label="관리자 이름"
                className="flex-grow"
                required
              />
              <TextField
                type="text"
                label="관리자 전화번호"
                className="flex-grow"
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <Button
              type="submit"
              variant="contained"
              size="large"
              onClick={() => {
                //TODO - 회원가입 API 연결
                setTimeout(() => {
                  navigate('/');
                }, 0);
              }}
            >
              회원가입
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
