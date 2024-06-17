import { cards } from '../../assets/mock-data';
import { TableRow } from '../TableRow/TableRow';
import { TableHead } from '../TableHead/TableHead';
import { headTableParams } from '../../assets/utils';

import { cnTable } from './Table.classname';

import './Table.css';

export const Table = () => {
  return (
    <table className={cnTable()}>
      <TableHead tableHeaders={headTableParams} />
      <TableRow cards={cards} />
    </table>
  );
};
