import { useQueryClient } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
import { MdWarning } from 'react-icons/md';
import { toast } from 'react-toastify';
import { QueryKeys } from '~/data/queryKey';
import { useAppSelector } from '~/lib/hooks/redux';
import { useUnprocessedAccidentQuery } from '~/lib/hooks/useApi';
import { useAccidentAlarm } from '~/lib/hooks/useStompApi';
import { UnprocessedAccidentInformationDto } from '~/types/common.dto';
import AccidentRegisterModal from '../../Modal/AccidentRegisterModal';

const AccidentAlarm = () => {
  const hospitalId = useAppSelector((state) => state.member).value
    .hospitalId?.[0];
  const [selectedAccident, setSelectedAccident] =
    useState<UnprocessedAccidentInformationDto | null>(null);
  const { data: unprocessedAccidents } =
    useUnprocessedAccidentQuery(hospitalId);
  const queryClient = useQueryClient();

  const handleAccidentAlarm = useCallback(async () => {
    console.log('aaa');
    queryClient.invalidateQueries({
      queryKey: QueryKeys.UNPROCESSED_ACCIDENT(hospitalId),
    });
  }, []);
  useAccidentAlarm(hospitalId, handleAccidentAlarm);

  useEffect(() => {
    unprocessedAccidents?.forEach((accident) =>
      toast(
        () => (
          <div
            className="flex rounded-sm border-2 border-red-500 bg-white transition-shadow hover:shadow-md"
            onClick={() => setSelectedAccident(accident)}
          >
            <div className="flex items-center justify-center bg-red-500 p-1 text-white">
              <MdWarning className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-2 p-4 text-sm">
              <p>
                <span className="font-bold text-primary">
                  {accident.camera?.content}
                </span>
                에서 사고가 발생했습니다.
              </p>
              <p className="text-xs text-comment">
                ※ 클릭하면 사고 대응을 위한 모달이 열립니다.
              </p>
            </div>
          </div>
        ),
        {
          className: 'bg-transparent w-fit shadow-none overflow-visible p-0',
          bodyClassName: 'w-fit overflow-visible p-0',
          position: 'top-left',
          autoClose: false,
          hideProgressBar: true,
          closeButton: false,
          draggable: false,
          toastId: accident.id,
        },
      ),
    );
  }, [unprocessedAccidents]);

  return (
    <AccidentRegisterModal
      selectedAccident={selectedAccident}
      onClose={() => setSelectedAccident(null)}
    />
  );
};

export default AccidentAlarm;
