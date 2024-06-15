import express from 'express';
import cors from 'cors';

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());


app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL,
}));


app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
