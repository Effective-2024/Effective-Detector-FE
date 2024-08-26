import { QueryKeys } from '~/data/queryKey';
import {
  HospitalDto,
  HospitalStatisticDto,
  LoginDto,
  MemberCreateDto,
} from '~/types/common.dto';
import { client } from '../api/client.axios';
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
        data: { loginId, loginPassword },
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
    queryFn: async (): Promise<HospitalDto | null> => {
      const response = await client.get(`/auth/members/me`);
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
