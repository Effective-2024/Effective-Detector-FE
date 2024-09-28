import { DatasetType } from '@mui/x-charts/internals';
import { mockCameras, mockMonitors } from '~/data/hospital';
import { QueryKeys } from '~/data/queryKey';
import {
  mockAccidentInformations,
  mockDatasetByMonth,
  mockDatasetByYear,
  mockGlobalPerformanceStatistic,
  mockHospitalPerformanceStatistic,
} from '~/data/statistic';
import {
  AccidentInformationPageableDto,
  CameraDto,
  GlobalPerformanceStatisticDto,
  HospitalDto,
  HospitalPerformanceStatisticDto,
  HospitalStatisticDto,
  LoginDto,
  MemberCreateDto,
  MonitorDto,
  MonitorPatchDto,
  MyInformationDto,
} from '~/types/common.dto';
import { authClient, client } from '../api/client.axios';
import { useAxiosMutation, useAxiosQuery } from './useAxios';

export const useLogin = () =>
  useAxiosMutation({
    mutationFn: async ({
      loginId,
      loginPassword,
    }: {
      loginId: string;
      loginPassword: string;
    }): Promise<LoginDto | null> => {
      const response = await client.post(`/auth/login`, {
        loginId,
        loginPassword,
      });
      return response?.data;
    },
  });

export const useLogout = () =>
  useAxiosMutation({
    mutationFn: async () => {
      await client.post(`/auth/logout`);
    },
  });

export const useExistMemberIdQuery = () =>
  useAxiosMutation({
    mutationFn: async (loginId: string) => {
      await client.get(`/auth/login-id/${loginId}`);
    },
  });

export const useHospitalSearchQuery = () =>
  useAxiosMutation({
    mutationFn: async (keyword: string): Promise<HospitalDto[]> => {
      const response = await client.get(`/hospitals`, { params: { keyword } });
      return response?.data;
    },
  });

export const useMemberCreate = () =>
  useAxiosMutation({
    mutationFn: async ({
      loginId,
      loginPassword,
      adminName,
      adminTel,
      hospitalId,
    }: MemberCreateDto) => {
      await client.post(`/auth/signup`, {
        loginId,
        loginPassword,
        adminName,
        adminTel,
        hospitalId,
      });
    },
  });
export const useMyInformationQuery = () =>
  useAxiosQuery({
    queryKey: QueryKeys.MY_INFORMATION,
    queryFn: async (): Promise<MyInformationDto | null> => {
      const response = await authClient.get(`/auth/members/me`);
      return response?.data;
    },
  });

export const useHospitalStatisticQuery = (hospitalId: number) =>
  useAxiosQuery({
    queryKey: QueryKeys.HOSPITAL_STATISTIC(hospitalId),
    queryFn: async (): Promise<HospitalStatisticDto | null> => {
      const response = await client.get(`/hospitals/${hospitalId}`);
      return response?.data;
    },
  });

// 막대 통계 그래프 데이터
export const useGlobalStatisticByYearQuery = (options?: {
  enabled?: boolean;
}) =>
  useAxiosQuery({
    ...options,
    queryKey: QueryKeys.GLOBAL_STATISTIC_BY_YEAR,
    queryFn: async (): Promise<DatasetType> => {
      // const response = await client.get(`/statistics/year`);
      // return response?.data;
      return mockDatasetByYear;
    },
  });

export const useGlobalStatisticByMonthQuery = (
  year: string,
  options?: {
    enabled?: boolean;
  },
) =>
  useAxiosQuery({
    ...options,
    queryKey: QueryKeys.GLOBAL_STATISTIC_BY_MONTH(year),
    queryFn: async (): Promise<DatasetType> => {
      // const response = await client.get(`/statistics/month`, {
      //   params: { year },
      // });
      // return response?.data;
      return mockDatasetByMonth;
    },
  });

export const useGlobalStatisticYearQuery = () =>
  useAxiosQuery({
    queryKey: QueryKeys.GLOBAL_STATISTIC_YEAR,
    queryFn: async (): Promise<number[]> => {
      // const response = await client.get(`/statistics/exist/years`);
      // return response?.data;
      return [2024, 2023, 2022, 2021];
    },
  });

export const useHospitalStatisticByYearQuery = (
  hospitalId: number,
  options?: { enabled?: boolean },
) =>
  useAxiosQuery({
    ...options,
    queryKey: QueryKeys.HOSPITAL_STATISTIC_BY_YEAR(hospitalId),
    queryFn: async (): Promise<DatasetType> => {
      // const response = await authClient.get(`/hospitals/{hospitalId}/statistics/year`);
      // return response?.data;
      return mockDatasetByYear;
    },
  });

export const useHospitalStatisticByMonthQuery = (
  year: string,
  hospitalId: number,
  options?: {
    enabled?: boolean;
  },
) =>
  useAxiosQuery({
    ...options,
    queryKey: QueryKeys.HOSPITAL_STATISTIC_BY_MONTH(year, hospitalId),
    queryFn: async (): Promise<DatasetType> => {
      // const response = await authClient.get(`/hospitals/{hospitalId}/statistics/month`, {
      //   params: { year },
      // });
      // return response?.data;
      return mockDatasetByMonth;
    },
  });
export const useHospitalStatisticYearQuery = (hospitalId: number) =>
  useAxiosQuery({
    queryKey: QueryKeys.HOSPITAL_STATISTIC_YEAR(hospitalId),
    queryFn: async (): Promise<number[]> => {
      // const response = await authClient.get(`/statistics/exist/years/hospital/{hospitalId}`);
      // return response?.data;
      return [2024, 2023];
    },
  });

// 통계 성과 조회
export const useGlobalPerformanceStatisticQuery = () =>
  useAxiosQuery({
    queryKey: QueryKeys.GLOBAL_PERFORMANCE_STATISTIC,
    queryFn: async (): Promise<GlobalPerformanceStatisticDto> => {
      // const response = await client.get(`/statistics/performance`);
      // return response?.data;
      return mockGlobalPerformanceStatistic;
    },
  });

export const useHospitalPerformanceStatisticQuery = (hospitalId: number) =>
  useAxiosQuery({
    queryKey: QueryKeys.HOSPITAL_PERFORMANCE_STATISTIC(hospitalId),
    queryFn: async (): Promise<HospitalPerformanceStatisticDto> => {
      // const response = await authClient.get(`/statistics/performance/hospitals/{hospitalId}`);
      // return response?.data;
      return mockHospitalPerformanceStatistic;
    },
  });

// 사고 목록 조회
export const useAccidentInformationsQuery = (
  pageNumber: number,
  pageSize: number,
) =>
  useAxiosQuery({
    queryKey: QueryKeys.ACCIDENT_INFORMATIONS(pageNumber, pageSize),
    queryFn: async (): Promise<AccidentInformationPageableDto> => {
      // const response = await client.get(`/accidents`,{
      //   params:{includeMalfunction,pageNumber,pageSize}
      // });
      // return response?.data;
      return mockAccidentInformations;
    },
  });

export const useCamerasQuery = (hospitalId: number) =>
  useAxiosQuery({
    queryKey: QueryKeys.CAMERAS(hospitalId),
    queryFn: async (): Promise<CameraDto[]> => {
      // const response = await authClient.get(`/hospitals/${hospitalId}/cameras`);
      // return response?.data;
      return mockCameras;
    },
  });

export const useMonitorsQuery = (hospitalId: number) =>
  useAxiosQuery({
    queryKey: QueryKeys.MONITORS(hospitalId),
    queryFn: async (): Promise<MonitorDto> => {
      // const response = await authClient.get(`/hospitals/${hospitalId}/monitors`);
      // return response?.data;
      return mockMonitors;
    },
  });

export const useMonitorChangePatch = () =>
  useAxiosMutation({
    mutationFn: async ({ hospitalId, slot, cameraId }: MonitorPatchDto) => {
      await authClient.patch(`/hospitals/${hospitalId}/monitors`, {
        slot,
        cameraId,
      });
    },
  });
