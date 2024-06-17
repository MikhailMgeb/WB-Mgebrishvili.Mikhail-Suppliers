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
    <div className={cnTableHead()}>
      <div className={cnTableHead('Row')}>
        {tableHeaders.map((title) => (
          <div className={cnTableHead('Cell')} key={uid()} style={{ width: title.width }}>{title.title}</div>
        ))}
      </div>
    </div>
  );
};
