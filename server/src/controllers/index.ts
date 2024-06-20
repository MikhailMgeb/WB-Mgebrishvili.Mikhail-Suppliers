/* eslint-disable import/no-extraneous-dependencies */

import type { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { Supply, loadSuppliesFromFile, saveSuppliesToFile } from '../utils/fileUtils';

export const getAllSupplies = (_req: Request, res: Response) => {
  try {
    const dataSupplies = loadSuppliesFromFile();
    res.json(dataSupplies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch supplies' });
  }
};

export const createSupply = async (req: Request, res: Response) => {
  try {
    const createdSupply = req.body;
    const dataSupplies = loadSuppliesFromFile();

    if (!createdSupply.id) {
      createdSupply.id = uuidv4();
    } else {
      const isCheckSupply = dataSupplies.some((supply) => supply.id === createdSupply.id);
      if (isCheckSupply) {
        return res.status(400).json({ error: 'Supply with this ID already exists' });
      }
    }

    dataSupplies.push(createdSupply);
    saveSuppliesToFile(dataSupplies);

    res.status(201).json({ message: 'Supply successfully created', status: 'success' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create supply' });
  }
};

export const updateSupply = (req: Request, res: Response) => {
  try {
    const dataSupplies = loadSuppliesFromFile();
    const { supplyId } = req.params;

    const indexToUpdate = dataSupplies.findIndex((supply) => supply.id === supplyId);

    if (indexToUpdate === -1) {
      return res.status(404).json({ error: 'Supply not found' });
    }

    const updatedFields = req.body as Supply;
    dataSupplies[indexToUpdate] = updatedFields;

    saveSuppliesToFile(dataSupplies);

    res.json({ message: 'Supply successfully update', status: 'success' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update supply' });
  }
};

export const deleteSupply = (req: Request, res: Response) => {
  try {
    const dataSupplies = loadSuppliesFromFile();
    const { supplyId } = req.params;

    const isCheckSupply = dataSupplies.some((supply) => supply.id === supplyId);

    if (!isCheckSupply) {
      return res.status(400).json({ error: 'There is no supply with this ID.' });
    }

    const filteredSupplies = dataSupplies.filter((supply) => supply.id !== supplyId);
    saveSuppliesToFile(filteredSupplies);

    res.status(200).json({ message: 'Supply successfully deleted', status: 'success' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete supply' });
  }
};
