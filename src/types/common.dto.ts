import { HospitalType } from './hospital';

export type Role = 'ROLE_병원_관리자' | 'ROLE_서비스_관리자' | 'ROLE_비로그인';

export interface MemberInfo {
  memberId: number;
  loginId: number;
  emailAddress: string;
  realName: string;
  thumbnailPath: string | null;
  generation: string;
  memberRoles: Role[];
}

export interface ExistMemberId {
  isExistMemberId: boolean;
}

export interface MemberCreateDto {
  id: string;
  password: string;
  hospitalId: number;
  hospitalType: HospitalType;
  managerName: string;
  managerPhoneNumber: string;
}

export interface HospitalDto {
  id: number;
  name?: string;
  type?: HospitalType;
  address?: string;
  tel?: string;
}
