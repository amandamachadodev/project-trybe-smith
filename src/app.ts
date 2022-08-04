import express from 'express';

import ProductRoute from './routers/productRoute';

const app = express();

app.use(express.json());

app.use(ProductRoute);

export default app;
