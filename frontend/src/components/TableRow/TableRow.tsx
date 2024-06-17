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
    <div className={cnTableRow()}>
      {cards.map((card) => (
        <div className={cnTableRow('Row')} key={card.id}>
          <div className={cnTableRow('Cell')} style={{ width: getWidth(0) }}>{card.id}</div>
          <div className={cnTableRow('Cell')} style={{ width: getWidth(1) }}>{card.date}</div>
          <div className={cnTableRow('Cell')} style={{ width: getWidth(2) }}>{card.city}</div>
          <div className={cnTableRow('Cell')} style={{ width: getWidth(3) }}>{`${card.quantity} шт.`}</div>
          <div className={cnTableRow('Cell')} style={{ width: getWidth(4) }}>{card.supplyType}</div>
          <div className={cnTableRow('Cell')} style={{ width: getWidth(5) }}>
            <div className={cnTableRow('Warehouse')}>
              <div className={cnTableRow('WarehouseName')}>{card.warehouseName}</div>
              <div className={cnTableRow('WarehouseAddress')}>{card.warehouseAddress}</div>
            </div>
          </div>
          <div className={cnTableRow('Cell')} style={{ width: getWidth(6) }}>
            {card.status === 'В пути' ? <Tag supplyStatus="inTransit" /> : <Tag supplyStatus="delayed" />}
          </div>
          <div className={cnTableRow('Cell')}>
            <Button scheme="cloudy" modification="alpha" icon={<IconMenu />} />
          </div>
        </div>
      ))}
    </div>
  );
};
