import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '@assets/logo/logo.svg';
import React, { useState, useEffect } from 'react';
import { Formik, Form, useField, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import { useExistMemberIdQuery, useMemberCreate } from '@lib/hooks/useApi';
import { HospitalType } from '~/types/hospital';
import HospitalSearchModal from '~/components/Modal/HospitalSearchModal';

interface Hospital {
  id: number;
  name: string;
}

export interface SignUpInfo {
  id: string;
  password: string;
  confirmPassword: string;
  hospital: Hospital;
  hospitalType: HospitalType;
  managerName: string;
  managerPhoneNumber: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const { mutate: createMember, isPending: isCreateMemberPending } =
    useMemberCreate();
  const { mutate: isExistId, isPending: isCheckExistMemberPending } =
    useExistMemberIdQuery();
  const [idAvailable, setIdAvailable] = useState<boolean>(false);
  const [openHospitalSearchModal, setOpenHospitalSearchModal] =
    useState<boolean>(false);

  const initialValues: SignUpInfo = {
    id: '',
    password: '',
    confirmPassword: '',
    hospital: { id: 0, name: '' },
    hospitalType: HospitalType.GENERAL_HOSPITAL,
    managerName: '',
    managerPhoneNumber: '',
  };

  const validationSchema = Yup.object({
    id: Yup.string().required('ID를 입력해주세요'),
    password: Yup.string()
      .min(8, '비밀번호는 8자 이상이어야 합니다')
      .required('비밀번호를 입력해주세요'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], '비밀번호가 일치하지 않습니다')
      .required('비밀번호를 다시 입력해주세요'),
    hospital: Yup.object().shape({
      id: Yup.number().min(1, '병원을 검색하여 선택해주세요'),
    }),
    managerName: Yup.string().required('관리자 이름을 입력해주세요'),
    managerPhoneNumber: Yup.string().required('관리자 전화번호를 입력해주세요'),
  });

  const handleSubmit = async (
    values: SignUpInfo,
    { setSubmitting }: FormikHelpers<SignUpInfo>,
  ) => {
    createMember(
      {
        id: values.id,
        password: values.password,
        hospitalId: values.hospital.id,
        hospitalType: values.hospitalType,
        managerName: values.managerName,
        managerPhoneNumber: values.managerPhoneNumber,
      },
      {
        onSuccess: () => {
          alert('회원가입이 완료되었습니다.');
          navigate('/');
        },
        onError: () => {
          alert('회원가입에 실패하였습니다.');
        },
      },
    );
    setSubmitting(false);
  };

  const IdField = () => {
    const [field, meta] = useField('id');

    const checkIdAvailability = async () => {
      isExistId(field.value, {
        onSuccess: (data) => {
          setIdAvailable(!data?.isExistMemberId);
        },
        onError: () => {
          setIdAvailable(false);
        },
      });
    };

    useEffect(() => {
      setIdAvailable(false);
    }, [field.value]);
    return (
      <div className="flex gap-2">
        <TextField
          {...field}
          type="text"
          label="아이디"
          className="flex-grow"
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
          FormHelperTextProps={{ sx: { color: 'success.main' } }}
        />
        <Button
          type="button"
          color="secondary"
          variant="contained"
          onClick={checkIdAvailability}
          className="h-[56px]"
          disabled={isCheckExistMemberPending || !field.value}
        >
          중복 확인
        </Button>
      </div>
    );
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          isSubmitting,
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue,
        }) => (
          <Form>
            <div className="mx-auto w-full max-w-sign">
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
                    <IdField />
                    <div className="flex gap-2">
                      <TextField
                        name="password"
                        type="password"
                        label="비밀번호"
                        className="flex-grow"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                      />
                      <TextField
                        name="confirmPassword"
                        type="password"
                        label="비밀번호 확인"
                        className="flex-grow"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.confirmPassword &&
                          Boolean(errors.confirmPassword)
                        }
                        helperText={
                          touched.confirmPassword && errors.confirmPassword
                        }
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-xl">병원 정보</p>
                    <div className="flex gap-2">
                      <TextField
                        type="text"
                        placeholder="병원명"
                        className="flex-grow"
                        value={values.hospital.name}
                        disabled={true}
                        error={
                          touched.hospital?.id && Boolean(errors.hospital?.id)
                        }
                        helperText={touched.hospital?.id && errors.hospital?.id}
                      />
                      <Button
                        type="button"
                        color="primary"
                        variant="outlined"
                        className="!min-w-[56px] max-w-[56px] !border-2"
                        onClick={() => setOpenHospitalSearchModal(true)}
                      >
                        <FaSearch className="h-9 w-9" />
                      </Button>
                    </div>
                    <FormControl className="flex">
                      <InputLabel id="hospital-type-label">
                        병원 유형 *
                      </InputLabel>
                      <Select
                        labelId="hospital-type-label"
                        name="hospitalType"
                        label="병원 유형 *"
                        className="flex-grow"
                        value={values.hospitalType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.hospitalType && Boolean(errors.hospitalType)
                        }
                      >
                        <MenuItem value={HospitalType.GENERAL_HOSPITAL}>
                          {HospitalType.GENERAL_HOSPITAL}
                        </MenuItem>
                        <MenuItem value={HospitalType.NURSING_HOME}>
                          {HospitalType.NURSING_HOME}
                        </MenuItem>
                        <MenuItem value={HospitalType.UNIVERSITY_HOSPITAL}>
                          {HospitalType.UNIVERSITY_HOSPITAL}
                        </MenuItem>
                        <MenuItem value={HospitalType.WELFARE_FACILITY}>
                          {HospitalType.WELFARE_FACILITY}
                        </MenuItem>
                      </Select>
                      {touched.hospitalType && errors.hospitalType && (
                        <Typography color="error">
                          {errors.hospitalType}
                        </Typography>
                      )}
                    </FormControl>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-xl">관리자 정보</p>
                    <div className="flex gap-2">
                      <TextField
                        type="text"
                        label="관리자 이름"
                        name="managerName"
                        className="flex-grow"
                        value={values.managerName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.managerName && Boolean(errors.managerName)
                        }
                        helperText={touched.managerName && errors.managerName}
                      />
                      <TextField
                        type="text"
                        label="관리자 전화번호"
                        name="managerPhoneNumber"
                        className="flex-grow"
                        value={values.managerPhoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.managerPhoneNumber &&
                          Boolean(errors.managerPhoneNumber)
                        }
                        helperText={
                          touched.managerPhoneNumber &&
                          errors.managerPhoneNumber
                        }
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={
                        isSubmitting || isCreateMemberPending || !idAvailable
                      }
                    >
                      회원가입
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <HospitalSearchModal
              open={openHospitalSearchModal}
              setOpen={setOpenHospitalSearchModal}
              setFieldValue={setFieldValue}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
