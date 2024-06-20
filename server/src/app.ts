import express from 'express';
import cors from 'cors';

import { suppliersRouter } from './router/suppliers/index';
import { errorMiddleware } from './middlewares/middlewares';

const port = process.env.PORT || 5000;
const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', suppliersRouter);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
