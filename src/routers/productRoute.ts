import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const router = Router();

const productController = new ProductController();

router.post('/products', productController.create);

router.get('/products', productController.list);

export default router;