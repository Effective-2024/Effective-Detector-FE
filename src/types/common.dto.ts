import { HospitalType } from '../data/hospital';

export type Role = 'ROLE_ADMIN' | 'ROLE_SUPER_ADMIN' | 'ROLE_ANONYMOUS';

export interface LoginDto {
  id: number;
  name: string;
  memberRole: Role;
  accessToken: string;
}

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
  loginId: string;
  loginPassword: string;
  adminName: string;
  adminTel: string;
  hospitalId: number;
}

export interface HospitalDto {
  id: number;
  name?: string;
  type?: HospitalType;
  address?: string;
  tel: string;
}

export interface MyInformationDto {
  id: number;
  name: string;
  memberRole: Role;
}

export interface HospitalStatisticDto {
  id: number;
  name: string;
  type: HospitalType;
  today: number;
  year: number;
  detectionRate: number;
  accidents: { date: string; accidentCount: number }[];
}
