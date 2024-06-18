/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-return-assign */

import { useState, useRef, useEffect } from 'react';
import Table from 'rc-table';
import { cn } from '@bem-react/classname';

import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import IconMenu from '../../assets/icons/icon-kebab.svg';
import { SupplyData } from '../../types/supply';
import { MenuDropdown } from '../MenuDropdown/MenuDropdown';

import './TableView.css';

const cnTableView = cn('TableView');

const CustomHeader = (props: any) => (
  <thead className={cnTableView('Thead')}>
    {props.children}
  </thead>
);

const CustomHeaderCell = (props: any) => (
  <th className={cnTableView('TheadCell')} scope="col">
    {props.children}
  </th>
);

const CustomBodyRow = (props: any) => (
  <tr className={cnTableView('TbodyRow')}>
    {props.children}
  </tr>
);

const CustomCell = (props: any) => (
  <td className={cnTableView('TbodyCell')}>
    {props.children}
  </td>
);

type TableRowProps = {
  cards: SupplyData[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

export const TableView = ({ cards, onDelete, onEdit }: TableRowProps) => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const menuRefs = useRef<(HTMLDivElement | null)[]>(Array(cards.length).fill(null));

  const handleDeleteClick = (id: string) => {
    onDelete(id);
    setOpenMenuIndex(null);
  };

  const handleEditClick = (id: string) => {
    onEdit(id);
    setOpenMenuIndex(null);
  };

  const handleOpenMenuClick = (index: number) => {
    setOpenMenuIndex(index);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (openMenuIndex !== null
      && !menuRefs.current[openMenuIndex]?.contains(event.target as Node)) {
      setOpenMenuIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMenuIndex]);

  const columns = [
    {
      title: 'Номер',
      dataIndex: 'id',
      key: 'id',
      width: 100,
      className: cnTableView(''),
    },
    {
      title: 'Дата поставки',
      dataIndex: 'date',
      key: 'date',
      width: 128,
    },
    {
      title: 'Город',
      dataIndex: 'city',
      key: 'city',
      width: 164,
    },
    {
      title: 'Количество',
      dataIndex: 'quantity',
      key: 'quantity',
      width: 142,
      render: (_text: string, record: SupplyData) => `${record.quantity} шт.`,
    },
    {
      title: 'Тип поставки',
      dataIndex: 'supplyType',
      key: 'supplyType',
      width: 164,
    },
    {
      title: 'Склад',
      dataIndex: 'warehouse',
      key: 'warehouse',
      width: 374,
      render: (_text: string, record: SupplyData) => (
        <div className={cnTableView('AddressDetails')}>
          <div className={cnTableView('AddressName')}>{record.warehouseName}</div>
          <div className={cnTableView('AddressFull')}>{record.warehouseAddress}</div>
        </div>
      ),
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      width: 74,
      render: (_text: string, record: SupplyData) => (
        <Tag supplyStatus={record.status === 'В пути' ? 'inTransit' : 'delayed'} />
      ),
    },
    {
      dataIndex: 'actions',
      key: 'actions',
      width: 32,
      render: (_text: string, record: SupplyData, rowIndex: number) => (
        <div className="action-buttons">
          <Button
            scheme="cloudy"
            modification="alpha"
            icon={<IconMenu />}
            onClick={() => handleOpenMenuClick(rowIndex)}
          />
          <div ref={(el) => (menuRefs.current[rowIndex] = el)}>
            {openMenuIndex === rowIndex && (
              <MenuDropdown
                options={['Редактировать', 'Удалить']}
                onSelect={(option: string) => {
                  if (option === 'Редактировать') {
                    handleEditClick(record.id);
                  } else if (option === 'Удалить') {
                    handleDeleteClick(record.id);
                  }
                }}
                isOpenMenu
              />
            )}
          </div>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      data={cards}
      rowKey={(record: SupplyData) => record.id}
      className={cnTableView()}
      components={{
        header: {
          table: CustomHeader,
          cell: CustomHeaderCell,
        },
        body: {
          row: CustomBodyRow,
          cell: CustomCell,
        },
      }}
    />
  );
};
export { Table };
