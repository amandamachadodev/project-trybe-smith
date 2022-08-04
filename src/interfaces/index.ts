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