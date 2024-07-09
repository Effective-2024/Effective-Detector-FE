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
