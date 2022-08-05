import express from 'express';

import ProductRoute from './routers/productRoute';
import UserRoute from './routers/userRoute';

const app = express();

app.use(express.json());

app.use(ProductRoute);
app.use(UserRoute);

export default app;
