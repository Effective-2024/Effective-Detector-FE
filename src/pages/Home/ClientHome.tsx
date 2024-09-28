import { Button, CircularProgress, MenuItem, Select } from '@mui/material';
import { BiCameraOff } from 'react-icons/bi';
import { MdSettings } from 'react-icons/md';
import { toast } from 'react-toastify';
import ContentBox from '~/components/ContentBox';
import PageCenterTitle from '~/components/Typography/PageCenterTitle';
import { useAppSelector } from '~/lib/hooks/redux';
import {
  useCamerasQuery,
  useMonitorChangePatch,
  useMonitorsQuery,
} from '~/lib/hooks/useApi';

const ClientHome = () => {
  const hospitalId = useAppSelector((state) => state.member).value.memberId;
  const { data: cameras, isLoading: isCameraLoding } =
    useCamerasQuery(hospitalId);
  const {
    data: monitors,
    refetch,
    isLoading: isMonitorLoading,
  } = useMonitorsQuery(hospitalId);
  const { mutate } = useMonitorChangePatch();
  const Monitor = ({
    slotNumber,
    colspan = 1,
    rowspan = 1,
  }: {
    slotNumber: number;
    colspan?: number;
    rowspan?: number;
  }) => (
    <div
      className={`relative min-h-[150px] rounded-md row-span-${rowspan} col-span-${colspan}`}
    >
      <div className="flex h-full w-full items-center justify-center rounded-md bg-background">
        <BiCameraOff className="h-8 w-8 text-comment" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-end rounded-b-md bg-black bg-opacity-25 px-2 py-1 text-xs">
        <Select
          size="small"
          variant="standard"
          sx={{
            fontSize: '12px',
            padding: '0px',
            '.MuiSelect-select': {
              padding: '1px', // 내장된 Select 텍스트 필드의 패딩 제거
            },
          }}
          value={monitors?.slots?.[slotNumber]?.id ?? -1}
          onChange={(e) => {
            console.log(cameras);
            mutate(
              {
                hospitalId,
                slot: slotNumber,
                cameraId: e.target.value as number,
              },
              {
                onSuccess: () => {
                  refetch();
                },
                onError: (error) => {
                  toast.error(error.message);
                },
              },
            );
          }}
        >
          <MenuItem value={-1}>선택 안함</MenuItem>
          {!isCameraLoding &&
            cameras?.map(({ id, content }) => (
              <MenuItem value={id}>{content}</MenuItem>
            ))}
        </Select>
      </div>
    </div>
  );

  return (
    <>
      <PageCenterTitle title="모니터링" />
      <ContentBox>
        <div className="flex justify-end">
          <Button
            color="primary"
            variant="outlined"
            startIcon={<MdSettings />}
            onClick={() => toast.info('아직 준비중인 기능이에요.')}
          >
            카메라 편집
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {isMonitorLoading ? (
            <div className="col-span-4 row-span-2 flex items-center justify-center">
              <CircularProgress />
            </div>
          ) : (
            <>
              <Monitor slotNumber={0} colspan={2} rowspan={2} />
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <Monitor slotNumber={index + 1} />
                ))}
            </>
          )}
        </div>
      </ContentBox>
    </>
  );
};

export default ClientHome;
