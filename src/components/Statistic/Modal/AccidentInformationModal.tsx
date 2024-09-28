import { Button } from '@mui/material';
import { HospitalAccidentInformationDto } from '~/types/common.dto';

interface AccidentInformationModalProps {
  selectedAccident: HospitalAccidentInformationDto | null;
  onClose: () => void;
}

const AccidentInformationModal = ({
  selectedAccident,
  onClose,
}: AccidentInformationModalProps) => {
  if (!selectedAccident) return <></>;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
      <div className="h-[606px] w-[1084px] rounded-[4px] bg-white">
        <Button onClick={onClose}>창 닫기</Button>
      </div>
    </div>
  );
};

export default AccidentInformationModal;
