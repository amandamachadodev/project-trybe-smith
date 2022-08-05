export interface IProduct {
  name: string;
  amount: string;
}
  
export interface Product extends IProduct {
  id: number;
}

export interface LProduct extends Product {
  orderId: number;
}

export interface IUser {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface User extends IUser {
  id: number;
}