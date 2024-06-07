export type LoginResponse = {
  id: number;
  email: string;
  accessToken: string;
  loggedInAt: Date;
  profileImageUrl: string;
  name: string;
};
export type CheckEmailDuplicateResponse = {
  requestType: string;
  requestValue: string;
  isDuplicated: boolean;
  availabilityStatus: string;
};
