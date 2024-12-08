export interface IUserToken {
  userEmail: string;
  role: "CUSTOMER" | "ADMIN" | "VENDOR" | "SUPERADMIN";
  iat: number;
  exp: number;
}
