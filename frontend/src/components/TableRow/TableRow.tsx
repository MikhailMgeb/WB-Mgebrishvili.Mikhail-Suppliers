import {
  FC, useEffect, useRef, useState,
} from 'react';

import { getWidth } from '../../assets/utils';
import { MenuDropdown } from '../MenuDropdown/MenuDropdown';
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
  // eslint-disable-next-line max-len
  const [openMenuIndexes, setOpenMenuIndexes] = useState<boolean[]>(Array(cards.length).fill(false));
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleOpenMenuClick = (index: number) => {
    const newOpenMenuIndexes = Array(cards.length).fill(false);
    newOpenMenuIndexes[index] = true;
    setOpenMenuIndexes(newOpenMenuIndexes);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (!menuRefs.current.some((ref) => ref?.contains(event.target as Node))) {
      setOpenMenuIndexes(Array(cards.length).fill(false));
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const setMenuRef = (el: HTMLDivElement | null, index: number) => {
    menuRefs.current[index] = el;
  };

  return (
    <div className={cnTableRow()}>
      {cards.map((card, index) => (
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
          <div className={cnTableRow('Cell', { action: true })}>
            <Button scheme="cloudy" modification="alpha" icon={<IconMenu />} onClick={() => handleOpenMenuClick(index)} />
            <div ref={(el) => setMenuRef(el, index)}>
              <MenuDropdown options={['Редактировать', 'Удалить']} isOpenMenu={openMenuIndexes[index]} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
