import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrderService from '../services/orderService';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public list = async (_req: Request, res: Response) => {
    const orders = await this.orderService.list();
    res.status(StatusCodes.OK).json(orders);
  };
}
  
export default OrderController;