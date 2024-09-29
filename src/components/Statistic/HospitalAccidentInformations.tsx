import { useState } from 'react';
import { hospitalAccidentDataGridColumns } from '~/data/statistic';
import { useAppSelector } from '~/lib/hooks/redux';
import { useHospitalAccidentInformationsQuery } from '~/lib/hooks/useApi';
import { HospitalAccidentInformationDto } from '~/types/common.dto';
import AccidentInformations from './AccidentInformations';
import AccidentInformationEditModal from './Modal/AccidentInformationEditModal';

const HospitalAccidentInformations = () => {
  const hospitalId = useAppSelector((state) => state.member).value.memberId;
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(5);
  const [selectedAccident, setSelectedAccident] =
    useState<HospitalAccidentInformationDto | null>(null);
  const { data: accidentInformations } = useHospitalAccidentInformationsQuery(
    pageNumber,
    pageSize,
    hospitalId,
  );

  return (
    <>
      <AccidentInformations
        accidentInformations={accidentInformations}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        pageSize={pageSize}
        setPageSize={setPageSize}
        columns={hospitalAccidentDataGridColumns}
        onRowClick={({ row }: { row: HospitalAccidentInformationDto }) =>
          setSelectedAccident(row)
        }
      />
      <AccidentInformationEditModal
        selectedAccident={selectedAccident}
        onClose={() => setSelectedAccident(null)}
      />
    </>
  );
};

export default HospitalAccidentInformations;
