import { SupplyData } from '../../models/models';

export const mockData: SupplyData[] = [
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

export const navItems = [
  { id: '1', to: '/', label: 'Поставка' },
  { id: '2', to: '/goods', label: 'Товары' },
  { id: '3', to: '/pricing-and-discounts', label: 'Цены и скидки' },
  { id: '4', to: '/analytics', label: 'Аналитика' },
  { id: '5', to: '/advertising', label: 'Реклама' },
];

export const searchSelectItems = [
  'По номеру', 'По городу', 'По типу поставки', 'По статусу',
];
