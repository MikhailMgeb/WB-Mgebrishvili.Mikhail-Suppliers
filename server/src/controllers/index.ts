import type { Request, Response } from 'express';

import { Supply, loadSuppliesFromFile, saveSuppliesToFile } from '../utils/fileUtils';

export const getAllSupplies = (_req: Request, res: Response) => {
    try {
        const supplies = loadSuppliesFromFile();
        res.json(supplies);
    } catch (error) {
        console.error('Error fetching supplies:', error);
        res.status(500).json({ error: 'Failed to fetch supplies' });
    }
};

export const createSupply = async (req: Request, res: Response) => {
    try {
        const createdSupply = req.body as Supply;
        const supplies = loadSuppliesFromFile();
        supplies.push(createdSupply);

        saveSuppliesToFile(supplies);

        res.status(201).json(loadSuppliesFromFile());
    } catch (error) {
        console.error('Error creating supply:', error);
        res.status(500).json({ error: 'Failed to create supply' });
    }
};

export const updateSupply = (req: Request, res: Response) => {
    try {
        const supplies = loadSuppliesFromFile();
        const { supplyId } = req.params;

        const indexToUpdate = supplies.findIndex((supply) => supply.id === supplyId);

        if (indexToUpdate === -1) {
            return res.status(404).json({ error: 'Supply not found' });
        }

        const updatedFields = req.body as Supply;
        supplies[indexToUpdate] = updatedFields;

        saveSuppliesToFile(supplies);

        res.json(supplies[indexToUpdate]);
    } catch (error) {
        console.error('Error updating supply:', error);
        res.status(500).json({ error: 'Failed to update supply' });
    }
};

export const deleteSupply = (req: Request, res: Response) => {
    try {
        const supplies = loadSuppliesFromFile();
        const supplyId = req.params.id;
        const filteredSupplies = supplies.filter((supply) => supply.id !== supplyId);

        saveSuppliesToFile(filteredSupplies);

        res.status(204).end();
    } catch (error) {
        console.error('Error deleting supply:', error);
        res.status(500).json({ error: 'Failed to delete supply' });
    }
};
