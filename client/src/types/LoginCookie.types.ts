export type LoginCookie = {
  name: string | null;
  value: string | boolean | null;
  maxAge?: number | null;
  path?: string | null;
  domain?: string | null;
  secure?: boolean | null;
  httpOnly?: boolean | null;
};
