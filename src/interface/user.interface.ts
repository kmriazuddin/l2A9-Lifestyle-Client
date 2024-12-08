/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IUser {
  userId: string;
  email: string;
  role: "CUSTOMER" | "VENDOR" | "ADMIN";
  isBlocked: boolean;
  Admin: any[];
  vendor: IVendor | null;
  customer: ICustomer | null;
}

export interface IVendor {
  vendorId: string;
  email: string;
  name: string;
  image: string | null;
  address: string;
  mobile: number;
  gender: string | null;
  userId: string;
}

export interface ICustomer {
  customerId: string;
  email: string;
  name: string;
  image: string | null;
  address: string;
  mobile: number;
  gender: string | null;
  userId: string;
}
