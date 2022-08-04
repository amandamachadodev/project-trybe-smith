import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/productService';

class ProductController {
  constructor(private productService = new ProductService()) { }
  
  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const productCreated = await this.productService.create(product);
    return res.status(StatusCodes.CREATED).json(productCreated);
  };

  public list = async (_req: Request, res: Response) => {
    const products = await this.productService.list();
    res.status(StatusCodes.OK).json(products);
  };
}
  
export default ProductController;