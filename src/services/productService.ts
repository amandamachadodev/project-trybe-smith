import connection from '../models/connection';
import { IProduct, Product, LProduct } from '../interfaces';
import ProductModel from '../models/productModel';

class ProductService {
  public model: ProductModel;
  
  constructor() {
    this.model = new ProductModel(connection);
  }
  
  create = async (product: IProduct): Promise<Product> => {
    const data = this.model.create(product);
    return data;
  };

  list = async (): Promise<LProduct[]> => {
    const products = await this.model.list();
    return products;
  };
}

export default ProductService;
