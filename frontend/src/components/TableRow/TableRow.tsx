import { FC } from 'react';

import { getWidth } from '../../assets/utils';

import { SupplyData } from '../../types/supply';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';

import IconMenu from '../../assets/icons/icon-kebab.svg';

import { cnTableRow } from './TableRow.classname';

import './TableRow.css';

type TableRowProps = {
  cards: SupplyData[];
};

export const TableRow: FC<TableRowProps> = ({ cards }) => {
  return (
    <tbody className={cnTableRow()}>
      {cards.map((card) => (
        <tr className={cnTableRow('Row')} key={card.id}>
          <td className={cnTableRow('Cell')} style={{ width: getWidth(0) }}>{card.id}</td>
          <td className={cnTableRow('Cell')} style={{ width: getWidth(1) }}>{card.date}</td>
          <td className={cnTableRow('Cell')} style={{ width: getWidth(2) }}>{card.city}</td>
          <td className={cnTableRow('Cell')} style={{ width: getWidth(3) }}>{`${card.quantity} шт.`}</td>
          <td className={cnTableRow('Cell')} style={{ width: getWidth(4) }}>{card.supplyType}</td>
          <td className={cnTableRow('Cell')} style={{ width: getWidth(5) }}>
            <div className={cnTableRow('Warehouse')}>
              <div className={cnTableRow('WarehouseName')}>{card.warehouseName}</div>
              <div className={cnTableRow('warehouseAddress')}>{card.warehouseAddress}</div>
            </div>
          </td>
          <td className={cnTableRow('Cell')} style={{ width: 118 }}>
            {card.status === 'В пути' ? <Tag supplyStatus="inTransit" /> : <Tag supplyStatus="delayed" />}
          </td>
          <td className={cnTableRow('Cell')}>
            <Button scheme="cloudy" modification="alpha" icon={<IconMenu />} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
