import { VscClose } from 'react-icons/vsc';
import PageTitle from '../Typography/PageTitle';
import { FormikErrors } from 'formik';
import { Hospital, SignUpInfo } from '~/pages/SignUp/SignUp';
import { TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { HospitalDto } from '~/types/common.dto';
import { HospitalType } from '~/types/hospital';

const hospitals: HospitalDto[] = [
  { id: 1, name: '병원1', type: HospitalType.DENTISTRY_HOSPITAL },
  { id: 2, name: '병원2', type: HospitalType.DENTISTRY_HOSPITAL },
  { id: 3, name: '병원3', type: HospitalType.DENTISTRY_HOSPITAL },
  { id: 4, name: '병원4', type: HospitalType.DENTISTRY_HOSPITAL },
  { id: 5, name: '병원1', type: HospitalType.DENTISTRY_HOSPITAL },
  { id: 6, name: '병원2', type: HospitalType.DENTISTRY_HOSPITAL },
  { id: 7, name: '병원3', type: HospitalType.DENTISTRY_HOSPITAL },
  { id: 8, name: '병원4', type: HospitalType.DENTISTRY_HOSPITAL },
  { id: 9, name: '병원1', type: HospitalType.DENTISTRY_HOSPITAL },
  { id: 10, name: '병원2', type: HospitalType.DENTISTRY_HOSPITAL },
  { id: 11, name: '병원3', type: HospitalType.DENTISTRY_HOSPITAL },
  { id: 12, name: '병원4', type: HospitalType.DENTISTRY_HOSPITAL },
  { id: 13, name: '병원1', type: HospitalType.DENTISTRY_HOSPITAL },
  { id: 14, name: '병원2', type: HospitalType.DENTISTRY_HOSPITAL },
  { id: 15, name: '병원3', type: HospitalType.DENTISTRY_HOSPITAL },
  { id: 16, name: '병원4', type: HospitalType.DENTISTRY_HOSPITAL },
];

interface HospitalSearchModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => Promise<void | FormikErrors<SignUpInfo>>;
}

const HospitalSearchModal = ({
  open,
  setOpen,
  setFieldValue,
}: HospitalSearchModalProps) => {
  const [keyword, setKeyword] = useState<string>('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      {open && (
        <div className="fixed left-0 top-0 z-10 flex h-[100vh] w-[100vw] items-center justify-center bg-black bg-opacity-30">
          <div className="flex h-[840px] min-w-[640px] flex-col gap-12 rounded-lg bg-white p-8">
            <div className="flex justify-between">
              <PageTitle title="병원 찾기" />
              <button
                type="button"
                className="text-comment"
                onClick={() => setOpen(false)}
              >
                <VscClose className="h-8 w-8" />
              </button>
            </div>
            <TextField
              name="searchKeyword"
              type="text"
              label="병원 검색어"
              className="w-full"
              value={keyword}
              onChange={handleChange}
            />
            <div className="flex min-h-0 flex-auto flex-col overflow-y-scroll rounded-lg bg-gray-100 p-4">
              {hospitals && hospitals.length > 0 ? (
                hospitals.map((hospital) => (
                  <div
                    key={hospital.id}
                    className="flex w-full justify-between border-b border-gray-300 p-4"
                  >
                    <p>{hospital.name}</p>
                    <button
                      type="button"
                      onClick={() => {
                        setFieldValue('hospital', {
                          id: hospital.id,
                          name: hospital.name,
                          type: hospital.type,
                        } as Hospital);
                        setOpen(false);
                      }}
                    >
                      선택
                    </button>
                  </div>
                ))
              ) : (
                <div className="my-auto text-center text-xl text-comment">
                  검색된 병원이 없습니다.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HospitalSearchModal;
