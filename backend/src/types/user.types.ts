export type UserData = {
  id: string;
  name: string;
  email: string;
  password: string;
  isVerified: boolean;
  last_otp: string;
  refresh_token: "";
  access_token: "";
};

export interface User {
  name: string;
  email: string;
  uid: string;
  sid: string;
}
