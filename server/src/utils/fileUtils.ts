import fs from 'fs';
import path from 'path';

import { Supply } from '../types/index';

const suppliesFilePath = path.join(__dirname, '..', 'models', 'data.json');

export const loadSuppliesFromFile = (): Supply[] => {
  try {
    const data = fs.readFileSync(suppliesFilePath, 'utf8');
    return JSON.parse(data) as Supply[];
  } catch (error) {
    console.error('Error reading supplies from file:', error);
    return [];
  }
};

export const saveSuppliesToFile = (suppliesData: Supply[]) => {
  try {
    const suppliesJSON = JSON.stringify(suppliesData, null, 2);
    fs.writeFileSync(suppliesFilePath, suppliesJSON, { encoding: 'utf8' });
    console.log('Supplies saved to file successfully');
  } catch (error) {
    console.error('Error saving supplies to file:', error);
  }
};
export { Supply };
