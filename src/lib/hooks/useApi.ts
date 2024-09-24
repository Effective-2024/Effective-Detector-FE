import { DatasetType } from '@mui/x-charts/internals';
import { QueryKeys } from '~/data/queryKey';
import {
  mockDatasetByMonth,
  mockDatasetByYear,
  mockPerformanceStatistic,
} from '~/data/statistic';
import {
  HospitalDto,
  HospitalStatisticDto,
  LoginDto,
  MemberCreateDto,
  MyInformationDto,
  PerformanceStatisticDto,
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

export const usePerformanceStatisticQuery = () =>
  useAxiosQuery({
    queryKey: QueryKeys.PERFORMANCE_STATISTIC,
    queryFn: async (): Promise<PerformanceStatisticDto> => {
      // const response = await client.get(`/statistics/performance`);
      // return response?.data;
      return mockPerformanceStatistic;
    },
  });
