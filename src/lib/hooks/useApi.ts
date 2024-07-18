import { client } from '../api/client.axios';
import { useAxiosMutation } from './useAxios';
import { ExistMemberId, MemberCreateDto } from '~/types/common.dto';
import { BusinessError } from '~/types/error';

export const useExistMemberIdQuery = () =>
  useAxiosMutation({
    mutationFn: async (memberId: string): Promise<ExistMemberId | null> => {
      try {
        const response = await client.get(`/login/check`, {
          params: { memberId },
        });
        return response.data;
      } catch (error) {
        if (error instanceof BusinessError) {
          return null;
        }
        throw error;
      }
    },
  });

export const useMemberCreate = () =>
  useAxiosMutation({
    mutationFn: async ({
      id,
      password,
      hospitalId,
      hospitalType,
      managerName,
      managerPhoneNumber,
    }: MemberCreateDto) => {
      await client.post(`/sign-up`, {
        data: {
          id,
          password,
          hospitalId,
          hospitalType,
          managerName,
          managerPhoneNumber,
        },
      });
    },
  });
