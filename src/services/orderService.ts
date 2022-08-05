import connection from '../models/connection';
import { Order } from '../interfaces';
import OrderModel from '../models/orderModel';

class OrderService {
  public model: OrderModel;
  
  constructor() {
    this.model = new OrderModel(connection);
  }
  
  list = async (): Promise<Order[]> => {
    const orders = await this.model.list();
    return orders;
  };
}

export default OrderService;