import express from 'express';

import {
  getAllSupplies,
  createSupply,
  updateSupply,
  deleteSupply,
} from '../../controllers/index';

export const suppliersRouter = express.Router();

suppliersRouter.get('/supplies', getAllSupplies);
suppliersRouter.post('/supplies', createSupply);
suppliersRouter.put('/supplies/:supplyId', updateSupply);
suppliersRouter.delete('/supplies/:supplyId', deleteSupply);
