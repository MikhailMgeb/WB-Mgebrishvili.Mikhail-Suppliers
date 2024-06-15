import express from 'express';
import cors from 'cors';

import { suppliersRouter } from './router/suppliers/index';
import { errorMiddleware } from './middlewares/middlewares';

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL,
}));

app.use('/api', suppliersRouter);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
