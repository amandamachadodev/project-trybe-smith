import { Pool } from 'mysql2/promise';
import { Order } from '../interfaces';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async list(): Promise<Order[]> {
    const result = await this.connection
      .execute(`SELECT O.id, O.userId, P.id AS 'productIds',
      FROM TrybeSmith.Orders AS O
      INNER JOIN TrybeSmith.Products AS P
      ON O.id = P.orderId;`);
    const [rows] = result;
    return rows as Order[];
  }
}

export default OrderModel;