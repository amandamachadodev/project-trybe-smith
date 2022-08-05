import express from 'express';

import ProductRoute from './routers/productRoute';
import UserRoute from './routers/userRoute';
import OrderRoute from './routers/orderRoute';

const app = express();

app.use(express.json());

app.use(ProductRoute);
app.use(UserRoute);
app.use(OrderRoute);

export default app;
