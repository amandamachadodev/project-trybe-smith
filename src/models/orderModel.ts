import { Pool } from 'mysql2/promise';
import { Order } from '../interfaces';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async list(): Promise<Order[]> {
    const result = await this.connection
      .execute(`SELECT O.id, O.userId, JSON_ARRAYAGG(P.id) AS 'productsIds'
      FROM Trybesmith.Orders AS O
      INNER JOIN Trybesmith.Products AS P
      ON O.id = P.orderId 
      GROUP BY O.id
      ORDER BY O.userId;`);
    const [rows] = result;
    return rows as Order[];
  }
}

export default OrderModel;