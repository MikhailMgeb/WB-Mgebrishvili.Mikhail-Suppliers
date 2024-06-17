// import { Button } from '../../components/Button/Button';
// import { MenuDropdown } from '../../components/MenuDropdown/MenuDropdown';
// import { cnTableRow } from '../../components/TableRow/TableRow.classname';
import { Tag } from '../Tag/Tag';
import { SupplyData } from '../../types/supply';
// import IconMenu from '../icons/icon-kebab.svg';

export const columns = [
  {
    title: 'Номер',
    dataIndex: 'id',
    key: 'Номер',
    width: 100,
  },
  {
    title: 'Дата поставки',
    dataIndex: 'date',
    key: 'Дата поставки',
    width: 128,
  },
  {
    title: 'Город',
    dataIndex: 'city',
    key: 'Город',
    width: 164,
  },
  {
    title: 'Количество',
    dataIndex: 'quantity',
    key: 'Количество',
    width: 142,
    render: (text: string, record: SupplyData) => `${record.quantity} шт.`,
  },
  {
    title: 'Тип поставки',
    dataIndex: 'supplyType',
    key: 'Тип поставки',
    width: 164,
  },
  {
    title: 'Склад',
    dataIndex: 'warehouseName',
    key: 'Склад',
    width: 374,
    render: (text: string, record: SupplyData) => (
      <div>
        <div>{record.warehouseName}</div>
        <div>{record.warehouseAddress}</div>
      </div>
    ),
  },
  {
    title: 'Статус',
    dataIndex: 'Статус',
    key: 'Статус',
    width: 116,
    render: Tag,
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    width: 116,
    // render: (text: string, record: SupplyData, rowIndex: number) => (
    //   <div>
    //     <Button
    //       scheme="cloudy"
    //       modification="alpha"
    //       icon={<IconMenu />}
    //       onClick={() => setOpenMenuIndex(rowIndex)}
    //     />
    //     <div ref={menuRef}>
    //       {openMenuIndex === rowIndex && (
    //         <MenuDropdown options={['Редактировать', 'Удалить']} isOpenMenu />
    //       )}
    //     </div>
    //   </div>
    // ),
  },
];

export const cards: SupplyData[] = [
  {
    id: '1548141',
    date: '2024-06-12',
    city: 'Тверь',
    quantity: 99922,
    supplyType: 'Короб',
    warehouseName: 'Внуково',
    warehouseAddress: 'пр. Победы, д. 25, Санкт-Петербург',
    status: 'Задерживается',
    key: '1',
  },
  {
    id: '1542222',
    date: '2024-06-12',
    city: 'Москва',
    quantity: 2333,
    supplyType: 'Монопаллета',
    warehouseName: 'Белая дача',
    warehouseAddress: 'пр. Ленинский, д. 7, Новосибирск',
    status: 'В пути',
    key: '2',
  },
  {
    id: '1543333',
    date: '2024-06-12',
    city: 'Москва',
    quantity: 2312,
    supplyType: 'Монопаллета',
    warehouseName: 'Белая дача',
    warehouseAddress: 'пр. Ленинский, д. 7, Новосибирск',
    status: 'Задерживается',
    key: '3',
  },
  {
    id: '1544444',
    date: '2024-06-12',
    city: 'Москва',
    quantity: 1052310,
    supplyType: 'Монопаллета',
    warehouseName: 'Белая дача',
    warehouseAddress: 'пр. Ленинский, д. 7, Новосибирск',
    status: 'В пути',
    key: '4',
  },
  {
    id: '1545555',
    date: '2024-06-12',
    city: 'Москва',
    quantity: 10210,
    supplyType: 'Монопаллета',
    warehouseName: 'Белая дача',
    warehouseAddress: 'пр. Ленинский, д. 7, Новосибирск',
    status: 'В пути',
    key: '5',
  },
];
