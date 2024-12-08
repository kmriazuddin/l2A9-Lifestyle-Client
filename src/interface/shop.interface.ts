import { IProduct } from "./product.interface";
import { IVendor } from "./user.interface";

export interface IShop {
  shopId: string;
  name: string;
  isBlackListed: boolean;
  location: string;
  images: string[];
  vendorId: string;
  createdAt: string;
  updatedAt: string;
  products?: IProduct[];
  followers?: IFollower[];
  vendor: IVendor;
}

export interface ICustomer {
  email: string;
}

export interface IFollower {
  id: string;
  shopId: string;
  customerId: string;
  createdAt: Date;
  updatedAt: Date;
  customer: ICustomer;
}
