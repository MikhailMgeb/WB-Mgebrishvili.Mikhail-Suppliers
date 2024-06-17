import { FC } from 'react';
import { uid } from 'uid';

import type { TitleParams } from '../../types/table';

import { cnTableHead } from './TableHead.classname';

import './TableHead.css';

type TableHeadProps = {
  tableHeaders: TitleParams[];
};

export const TableHead: FC<TableHeadProps> = ({ tableHeaders }) => {
  return (
    <thead className={cnTableHead()}>
      <tr className={cnTableHead('TableRow')}>
        {tableHeaders.map((title) => (
          <th className={cnTableHead('TableCell')} key={uid()} style={{ width: title.width }}>{title.title}</th>
        ))}
      </tr>
    </thead>
  );
};
