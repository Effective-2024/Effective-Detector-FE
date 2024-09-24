import { Box, Stack, Switch } from '@mui/material';
import { DataGrid, GridPagination, gridClasses } from '@mui/x-data-grid';
import { useState } from 'react';
import { accidentDataGridColumns } from '~/data/statistic';
import { useAccidentInformationsQuery } from '~/lib/hooks/useApi';

const AccidentInformations = () => {
  const [includeMalfunction, setIncludeMalfunction] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(5);
  const { data: accidentInformations } = useAccidentInformationsQuery(
    includeMalfunction,
    pageNumber,
    pageSize,
  );

  return (
    <>
      <div className="flex items-center">
        <label>오작동 사고 포함</label>
        <Switch
          value={includeMalfunction}
          onChange={(_, checked) => setIncludeMalfunction(checked)}
        />
      </div>
      <DataGrid
        rows={accidentInformations?.content}
        columns={accidentDataGridColumns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{
          footer: () => (
            <Stack
              direction="row"
              borderTop={1}
              borderColor="#E0E0E0"
              padding={1}
              paddingY={0}
              gap={2}
            >
              <Box flex="auto" />
              <GridPagination
                rowsPerPage={pageSize}
                page={pageNumber}
                count={accidentInformations?.totalElements || 0}
                onRowsPerPageChange={(e) =>
                  setPageSize(parseInt(e.target.value))
                }
                onPageChange={(_, page) => setPageNumber(page)}
              />
            </Stack>
          ),
        }}
        onRowClick={(params) => {
          // TODO 모달 구현하기
          console.log(params.row.videoUrl);
        }}
        getRowId={(row) => row.id}
        pageSizeOptions={[5, 10, 50, 100]}
        disableRowSelectionOnClick
        sx={{
          '--DataGrid-containerBackground': '#F2F2F2', // 헤더의 배경색 설정
          [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]:
            {
              outline: 'none',
            },
          [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]:
            {
              outline: 'none',
            },
        }}
      />
    </>
  );
};

export default AccidentInformations;
