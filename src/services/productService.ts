import connection from '../models/connection';
import { IProduct, Product } from '../interfaces';
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
}

export default ProductService;
